import { useState } from "react";

const partnerFormEndpoint = import.meta.env.VITE_FORMSPREE_PARTNER_ENDPOINT?.trim();

export default function Partner() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!partnerFormEndpoint) {
      setFormStatus("unconfigured");
      return;
    }

    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      const response = await fetch(partnerFormEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Partnership form submission failed");

      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="partner-page">
      <header className="partner-page-header">
        <p className="eyebrow">Work With Us</p>
        <h1>Become a partner</h1>
        <p>
          Tell us about your organization and the collaboration you have in mind.
          Our team will follow up to explore how we can work together.
        </p>
      </header>

      <form className="contact-form partner-form" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="SFU Rocketry partnership inquiry" />
        <fieldset className="partner-form-group">
          <legend>Name</legend>
          <div className="partner-form-grid">
            <div className="partner-field">
              <label htmlFor="partner-first-name">First Name (required)</label>
              <input id="partner-first-name" name="firstName" type="text" autoComplete="given-name" required />
            </div>
            <div className="partner-field">
              <label htmlFor="partner-last-name">Last Name (required)</label>
              <input id="partner-last-name" name="lastName" type="text" autoComplete="family-name" required />
            </div>
            <div className="partner-field">
              <label htmlFor="partner-company">Company or Organization Name (required)</label>
              <input id="partner-company" name="company" type="text" autoComplete="organization" required />
            </div>
            <div className="partner-field">
              <label htmlFor="partner-job-title">Job Title (required)</label>
              <input id="partner-job-title" name="jobTitle" type="text" autoComplete="organization-title" required />
            </div>
            <div className="partner-field">
              <label htmlFor="partner-email">Email (required)</label>
              <input id="partner-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="partner-field">
              <label htmlFor="partner-phone">Phone</label>
              <input id="partner-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
          </div>
        </fieldset>

        <div className="partner-field">
          <label htmlFor="partner-type">Type of Partnership (required)</label>
          <select id="partner-type" name="partnershipType" defaultValue="" required>
            <option value="" disabled>Select a partnership type</option>
            <option value="Funding or sponsorship">Funding or sponsorship</option>
            <option value="Equipment or materials">Equipment or materials</option>
            <option value="Technical expertise or mentorship">Technical expertise or mentorship</option>
            <option value="Research or testing collaboration">Research or testing collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="partner-field">
          <label htmlFor="partner-details">Partnership Details (required)</label>
          <p className="partner-field-hint" id="partner-details-hint">
            Please provide a preliminary description of your envisioned partnership,
            including your objectives and expectations from this collaboration with SFU Rocketry.
          </p>
          <textarea
            id="partner-details"
            name="partnershipDetails"
            rows="7"
            aria-describedby="partner-details-hint"
            required
          />
        </div>

        <div className="partner-field">
          <label htmlFor="partner-other-details">Other Details</label>
          <p className="partner-field-hint" id="partner-other-hint">
            If you have further details or questions for us, please let us know.
          </p>
          <textarea
            id="partner-other-details"
            name="otherDetails"
            rows="4"
            aria-describedby="partner-other-hint"
          />
        </div>

        <button className="btn" type="submit" disabled={formStatus === "sending"}>
          {formStatus === "sending" ? "Sending..." : "Submit"}
        </button>
        {formStatus !== "idle" && (
          <p
            className={`form-status${formStatus === "error" ? " is-error" : ""}`}
            role={formStatus === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {formStatus === "sent" && "Your partnership inquiry was sent. Thank you for reaching out."}
            {formStatus === "error" && "Your inquiry could not be sent. Please try again or contact us directly."}
            {formStatus === "unconfigured" && "The partner form is not configured yet. Please contact us directly."}
          </p>
        )}
      </form>
    </div>
  );
}
