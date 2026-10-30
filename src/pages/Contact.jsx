import { useState } from "react";

const contactFormEndpoint = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT?.trim();

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contactFormEndpoint) {
      setFormStatus("unconfigured");
      return;
    }

    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-main">
        <div className="contact-main-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h1>Contact Us</h1>
              <p>Have a question, need assistance, or want to explore partnership opportunities? We&apos;re just a message away!</p>
            </div>
            <a className="contact-detail" href="mailto:sfurocketry@gmail.com">
              <span className="contact-icon" aria-hidden="true">📮</span>
              <span>sfurocketry@gmail.com</span>
            </a>
            <p className="contact-address"><span aria-hidden="true">📍</span> 250-13450 102 Ave, Surrey, BC V3T 0A3</p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-name-fields">
              <div>
                <label htmlFor="contact-first-name">First Name (required)</label>
                <input id="contact-first-name" name="firstName" type="text" required />
              </div>
              <div>
                <label htmlFor="contact-last-name">Last Name (required)</label>
                <input id="contact-last-name" name="lastName" type="text" required />
              </div>
            </div>
            <label htmlFor="contact-email">Email (required)</label>
            <input id="contact-email" name="email" type="email" required />
            <label htmlFor="contact-message">Message (required)</label>
            <textarea id="contact-message" name="message" rows="7" required />
            <button className="btn" type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Send"}
            </button>
            {formStatus !== "idle" && (
              <p
                className={`form-status${formStatus === "error" ? " is-error" : ""}`}
                role={formStatus === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {formStatus === "sent" && "Message sent. We'll be in touch soon."}
                {formStatus === "error" && "Message could not be sent. Please try again or email us directly."}
                {formStatus === "unconfigured" && "The contact form is not configured yet. Please email us directly."}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
