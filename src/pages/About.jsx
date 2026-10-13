import { alumni, executives, pastPresidents } from "../data/people";

const introImageStyle = {
  position: "absolute",
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(11, 14, 20, 0.92), rgba(11, 14, 20, 0.18)), url("/images/Pages-Backgrounds/About.jpg") center / cover',
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

function getPeopleSortYear(date, useFirstYear) {
  const years = String(date || "").match(/\d{4}/g);
  const year = useFirstYear ? years?.[0] : years?.[years.length - 1];
  return Number(year || 0);
}

function sortPeopleByDate(people, useFirstYear = false) {
  return [...people].sort(
    (first, second) =>
      getPeopleSortYear(second.date, useFirstYear) - getPeopleSortYear(first.date, useFirstYear)
  );
}

function PeopleGallery({ people, imageFolder, emptyMessage }) {
  if (people.length === 0) {
    return <p className="people-empty-state">{emptyMessage}</p>;
  }

  return (
    <div className="people-gallery">
      {people.map((person) => (
        <article className="person-profile" key={person.name}>
          <div className="person-portrait">
            {person.image ? (
              <img
                src={`${import.meta.env.BASE_URL}images/People/${imageFolder}/${person.image}`}
                alt={person.name}
                loading="lazy"
                onError={(event) => { event.currentTarget.hidden = true; }}
              />
            ) : (
              <span aria-hidden="true">{getInitials(person.name)}</span>
            )}
          </div>
          <h3>{person.name}</h3>
          {(person.description || person.date) && (
            <p>{[person.description, person.date].filter(Boolean).join(" ")}</p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro page-hero">
        <div className="about-intro-image" style={introImageStyle} aria-hidden="true" />
        <div className="about-intro-content page-hero-content">
          <h1>About Us</h1>
          <section className="about-stats" aria-label="SFU Rocketry facts">
            <div><strong>700+</strong><span>People impacted</span></div>
            <div><strong>12</strong><span>Industry partners</span></div>
            <div><strong>10</strong><span>Project teams</span></div>
            <div><strong>7</strong><span>Years of R&amp;D</span></div>
          </section>
          <p className="about-lead">
            SFU Rocketry is a leading student rocketry group in Canada. We
            design liquid rocket engines and support our Canadian aerospace
            industry by partnering on R&amp;D.
          </p>
        </div>
      </section>

      <section className="about-work">
        <div className="about-work-copy">
          <p className="eyebrow">What We Do</p>
          <h2>Engineering with purpose</h2>
          <p>
            We design, build, and test rocket engines, flight computers, and
            sensors from the ground up. Our teams take on complex aerospace
            challenges through hands-on research, development, and testing.
          </p>
          <p>
            Working with industry partners, regulators, and academic institutions,
            we deliver ambitious projects on accelerated timelines.
          </p>
        </div>
        <figure className="about-work-image">
          <img src={`${import.meta.env.BASE_URL}images/misc/WhatWeDo.jpeg`} alt="SFU Rocketry liquid rocket engine during development" loading="lazy" />
        </figure>
      </section>

      <section className="about-work about-why">
        <figure className="about-work-image">
          <img src={`${import.meta.env.BASE_URL}images/misc/WhyItMatters.jpg`} alt="SFU Rocketry liquid rocket engine during development" loading="lazy" />
        </figure>
        <div className="about-work-copy">
          <p className="eyebrow">Why It Matters</p>
          <h2>Build, test, learn, repeat</h2>
          <p>
            We help advance access to space by developing new propulsion
            technology, validating it through real test campaigns, and
            preparing engineers to solve the next generation of challenges.
          </p>
          <p><em>We are not here to participate. We are here to raise the bar.</em></p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="eyebrow">What We Believe In</p>
          <h2>Values that keep us sharp</h2>
        </div>
        <div className="about-values-grid">
          <article><span>01</span><h3>Execute What Matters</h3><p>We move fast and iterate with purpose. Every design, test, and decision earns its place.</p></article>
          <article><span>02</span><h3>Own the Outcome</h3><p>No silos and no handoffs. Every member is responsible for what they build, test, and deliver.</p></article>
          <article><span>03</span><h3>Stay Scrappy</h3><p>When tools are missing, we make our own. Constraints drive our creativity.</p></article>
          <article><span>04</span><h3>Raise the Bar</h3><p>Good enough is not good enough. Our standards move up alongside our ambition.</p></article>
        </div>
      </section>

      <section className="about-people about-team">
        <div className="about-section-heading">
          <p className="eyebrow">The People Behind the Work</p>
          <h2>Executive Team</h2>
        </div>
        <PeopleGallery
          people={executives}
          imageFolder="Executives"
          emptyMessage="Executive profiles will appear here."
        />
      </section>

      <section className="about-people about-team">
        <div className="about-section-heading">
          <p className="eyebrow">Leadership Through the Years</p>
          <h2>Past Presidents</h2>
        </div>
        <PeopleGallery
          people={sortPeopleByDate(pastPresidents, true)}
          imageFolder="Alumni"
          emptyMessage="Past presidents will appear here. Add them in the people data list."
        />
      </section>

      <section className="about-people about-alumni">
        <div className="about-section-heading">
          <p className="eyebrow">The Work Continues</p>
          <h2>Impactful Alumni</h2>
        </div>
        <PeopleGallery
          people={sortPeopleByDate(alumni)}
          imageFolder="Alumni"
          emptyMessage="Alumni profiles will appear here. Add each person in the people data list."
        />
      </section>
    </div>
  );
}
