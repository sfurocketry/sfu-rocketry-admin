import { Link } from "react-router-dom";

export default function SupportUs() {
  return (
    <section className="support-page">
      <article className="support-option">
        <p className="eyebrow">Support SFU Rocketry</p>
        <h1>Make a donation</h1>
        <p>
          As we strive to reach new heights in aerospace technology and provide
          unparalleled learning experiences for our students, <em>your support
          becomes instrumental.</em>
        </p>
        <p>
          Every contribution, big or small, helps us purchase essential materials,
          fund critical experiments, and run testing events.
        </p>
        <p>
          By donating to SFU Rocketry, you&apos;re not just funding a project; you&apos;re
          investing in the future of space exploration and the education of young,
          aspiring engineers.
        </p>
        <a className="btn" href="https://www.sfu.ca/giving/" target="_blank" rel="noreferrer">
          Make a donation
        </a>
      </article>

      <article className="support-option">
        <p className="eyebrow">Work With Us</p>
        <h1>Become a partner</h1>
        <p>
          As a Partner, your organization will play a crucial role in shaping the
          future of space exploration and engineering excellence.
        </p>
        <p>
          Our partnership program is designed to create mutually beneficial
          relationships, where your support in resources, expertise, or funding
          directly contributes to groundbreaking rocketry projects and the
          development of next-generation engineers.
        </p>
        <p>
          In return, your organization gains visibility among a talented pool of
          students, access to cutting-edge research and testing events, and
          association with a leading force in the field of Canadian Rocketry.
        </p>
        <Link className="btn" to="/partner">Become a partner</Link>
      </article>
    </section>
  );
}
