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
      <section className="contact-hero page-hero">
        <div className="contact-hero-image" aria-hidden="true" />
        <div className="contact-hero-content page-hero-content">
          <p className="eyebrow">Get In Touch</p>
          <h1>Contact Us</h1>
          <p>Have a question, need assistance, or want to explore partnership opportunities? We are just a message away.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-details">
          <p className="eyebrow">Start A Conversation</p>
          <h2>Let&apos;s make something fly</h2>
          <a className="contact-detail" href="mailto:sfurocketry@gmail.com">
            <span className="contact-icon" aria-hidden="true">@</span>
            <span><strong>Email</strong><br />sfurocketry@gmail.com</span>
          </a>
          <a className="contact-detail" href="https://maps.google.com/?q=13450+102+Avenue+Surrey+BC" target="_blank" rel="noreferrer">
            <span className="contact-icon" aria-hidden="true">+</span>
            <span><strong>Address</strong><br />250-13450 102 Ave<br />Surrey, BC V3T 0A3</span>
          </a>
          <div className="contact-socials">
            <strong>Follow the work</strong>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/sfu-rocketry" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/sfurocketry/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/SFURocketry/" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" required />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="7" required />
          <button className="btn" type="submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Sending..." : "Send Message"}
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
      </section>

      <section className="contact-location">
        <div className="contact-location-image" aria-hidden="true" />
        <div className="contact-location-content">
          <p className="eyebrow">Find Us</p>
          <h2>Based in Surrey, building for everywhere</h2>
          <p>Our team works from SFU&apos;s Surrey campus and partner facilities across British Columbia.</p>
          <a className="btn btn-outline" href="https://maps.google.com/?q=13450+102+Avenue+Surrey+BC" target="_blank" rel="noreferrer">Open in Maps</a>
        </div>
      </section>
    </div>
  );
}
