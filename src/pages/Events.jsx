import { useEffect, useState } from "react";

const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID?.trim();
const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY?.trim();
const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseEventDate(eventDate) {
  if (eventDate.dateTime) return new Date(eventDate.dateTime);

  const [year, month, day] = eventDate.date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatEventDate(startDate, endDate, isAllDay = false) {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  if (!endDate) return dateFormatter.format(startDate);

  if (isAllDay) {
    const lastEventDay = new Date(endDate);
    lastEventDay.setDate(lastEventDay.getDate() - 1);
    const dateRange = startDate.toDateString() === lastEventDay.toDateString()
      ? dateFormatter.format(startDate)
      : `${dateFormatter.format(startDate)} - ${dateFormatter.format(lastEventDay)}`;
    return `${dateRange} · All day`;
  }

  if (startDate.toDateString() === endDate.toDateString()) {
    return `${dateFormatter.format(startDate)} · ${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`;
  }

  return `${dateFormatter.format(startDate)} ${timeFormatter.format(startDate)} - ${dateFormatter.format(endDate)} ${timeFormatter.format(endDate)}`;
}

function getMonthDays(month) {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const leadingDays = firstDay.getDay();
  const cellCount = 42;

  return Array.from({ length: cellCount }, (_, index) => {
    const dayNumber = index - leadingDays + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) return null;
    return new Date(month.getFullYear(), month.getMonth(), dayNumber);
  });
}

function CalendarMonth({ month, eventsByDate, selectedDate, onSelectDate }) {
  const monthDays = getMonthDays(month);
  const monthLabel = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(month);

  return (
    <section className="calendar-month-card" aria-label={monthLabel}>
      <h3>{monthLabel}</h3>
      <div className="calendar-grid" role="grid" aria-label={monthLabel}>
        {weekdayLabels.map((day) => (
          <div className="calendar-weekday" role="columnheader" key={day}>{day}</div>
        ))}
        {monthDays.map((date, index) => {
          if (!date) return <span className="calendar-day is-empty" key={`empty-${index}`} />;

          const dateKey = getDateKey(date);
          const dayEvents = eventsByDate.get(dateKey) || [];
          return (
            <button
              className={`calendar-day${dayEvents.length ? " has-events" : ""}${dateKey === selectedDate ? " is-selected" : ""}`}
              type="button"
              role="gridcell"
              aria-label={`${date.toLocaleDateString()}${dayEvents.length ? `, ${dayEvents.length} events` : ""}`}
              aria-pressed={dateKey === selectedDate}
              key={dateKey}
              onClick={() => onSelectDate(dateKey)}
            >
              <span className="calendar-day-number">{date.getDate()}</span>
              {dayEvents.length > 0 && <span className="calendar-event-count">{dayEvents.length}</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loadState, setLoadState] = useState("loading");
  const [loadError, setLoadError] = useState("");
  const [selectedDate, setSelectedDate] = useState(() => getDateKey(new Date()));

  useEffect(() => {
    if (!calendarId || !apiKey) {
      setLoadState("unconfigured");
      return undefined;
    }

    const controller = new AbortController();

    async function loadEvents() {
      setLoadState("loading");
      setLoadError("");

      try {
        const calendarEvents = [];
        let pageToken;

        do {
          const params = new URLSearchParams({
            key: apiKey,
            timeMin: new Date().toISOString(),
            singleEvents: "true",
            orderBy: "startTime",
            maxResults: "250",
          });
          if (pageToken) params.set("pageToken", pageToken);

          const response = await fetch(
            `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`,
            { signal: controller.signal }
          );
          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.error?.message || "Google Calendar could not be loaded.");
          }

          calendarEvents.push(...(result.items || []));
          pageToken = result.nextPageToken;
        } while (pageToken);

        const upcomingEvents = calendarEvents
          .filter((event) => event.status !== "cancelled" && event.start)
          .map((event) => ({
            id: event.id,
            title: event.summary || "Untitled event",
            description: event.description || "",
            location: event.location || "",
            startDate: parseEventDate(event.start),
            endDate: event.end ? parseEventDate(event.end) : null,
            isAllDay: Boolean(event.start.date),
            htmlLink: event.htmlLink,
          }))
          .filter((event) => event.startDate >= new Date())
          .sort((first, second) => first.startDate - second.startDate);

        setEvents(upcomingEvents);
        setLoadState("ready");
      } catch (error) {
        if (error.name === "AbortError") return;
        setLoadError(error.message);
        setLoadState("error");
      }
    }

    loadEvents();
    return () => controller.abort();
  }, []);

  const eventsByDate = new Map();
  for (const event of events) {
    const key = getDateKey(event.startDate);
    eventsByDate.set(key, [...(eventsByDate.get(key) || []), event]);
  }

  const selectedEvents = eventsByDate.get(selectedDate) || [];
  const today = new Date();
  const viewMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const eventsWithin30Days = events.filter(
    (event) => event.startDate >= today && event.startDate <= thirtyDaysFromNow
  );
  const visibleMonths = Array.from({ length: 5 }, (_, offset) =>
    new Date(viewMonth.getFullYear(), viewMonth.getMonth() + offset, 1)
  );
  return (
    <div className="events-page">
      <section className="events-hero page-hero">
        <div className="events-hero-image" aria-hidden="true" />
        <div className="events-hero-content page-hero-content">
          <p className="eyebrow">SFU Rocketry Calendar</p>
          <h1>Upcoming Events</h1>
          <p>Follow the test campaigns, milestones, and moments that bring our work to life.</p>
        </div>
      </section>

      <section className="events-upcoming" aria-labelledby="upcoming-heading">
        <div className="events-list-heading">
          <p className="eyebrow">Coming Up</p>
          <h2 id="upcoming-heading">Next 30 days</h2>
        </div>
        {loadState === "ready" && eventsWithin30Days.length > 0 && (
          <div className="upcoming-event-list">
            {eventsWithin30Days.map((event) => (
              <article className="upcoming-event" key={event.id}>
                <p className="upcoming-event-date">{formatEventDate(event.startDate, event.endDate, event.isAllDay)}</p>
                <h3>{event.title}</h3>
                {event.description && <p className="upcoming-event-description">{event.description}</p>}
                {event.location && <p>{event.location}</p>}
                {event.htmlLink && (
                  <a href={event.htmlLink} target="_blank" rel="noreferrer">Open in Google Calendar</a>
                )}
              </article>
            ))}
          </div>
        )}
        {loadState === "ready" && events.length === 0 && (
          <p className="calendar-message">There are no upcoming events on the calendar.</p>
        )}
        {loadState === "ready" && events.length > 0 && eventsWithin30Days.length === 0 && (
          <p className="calendar-message">There are no events scheduled in the next 30 days.</p>
        )}
        {loadState === "loading" && <p className="calendar-message" role="status">Loading events...</p>}
        {loadState === "unconfigured" && (
          <p className="calendar-message">Add the Google Calendar settings from `.env.example` to connect the events calendar.</p>
        )}
        {loadState === "error" && (
          <p className="calendar-message is-error" role="alert">{loadError}</p>
        )}
      </section>

      <section className="events-calendar-section" aria-labelledby="calendar-heading">
        <div className="calendar-section-heading">
          <h2 id="calendar-heading">Events Calendar</h2>
        </div>
        <div className="events-calendar">
          <div className="calendar-month-grid calendar-current-layout">
            <CalendarMonth
              month={visibleMonths[0]}
              eventsByDate={eventsByDate}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
            <div className="calendar-day-events" aria-live="polite">
              <h3>Event details</h3>
              <h4>{new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(
                new Date(`${selectedDate}T00:00:00`)
              )}</h4>
              {selectedEvents.length > 0 ? selectedEvents.map((event) => (
                <article className="calendar-event" key={event.id}>
                  <p className="calendar-event-time">{formatEventDate(event.startDate, event.endDate, event.isAllDay)}</p>
                  <h4>{event.title}</h4>
                  {event.location && <p>{event.location}</p>}
                  {event.description && <p className="calendar-event-description">{event.description}</p>}
                  {event.htmlLink && (
                    <a href={event.htmlLink} target="_blank" rel="noreferrer">Open in Google Calendar</a>
                  )}
                </article>
              )) : (
                <p className="calendar-message">No events on this date.</p>
              )}
            </div>
          </div>
          <h3 className="calendar-next-heading">Next 4-months</h3>
          <div className="calendar-month-grid calendar-next-grid">
            {visibleMonths.slice(1).map((month) => (
              <CalendarMonth
                key={getDateKey(month)}
                month={month}
                eventsByDate={eventsByDate}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}