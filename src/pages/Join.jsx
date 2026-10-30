export default function Join() {
  return (
    <div className="join-page">
      <section className="join-hero page-hero">
        <div className="join-hero-image" aria-hidden="true" />
        <div className="join-hero-content page-hero-content">
          <p className="eyebrow">Join SFU Rocketry</p>
          <h1>Help Build the Future of Space Travel</h1>
          <p>Recruiting start of 2027!.</p>
          <a href="/contact" className="btn">Apply Here</a>
        </div>
      </section>

      <section className="join-section join-roles">
        <p className="eyebrow">Find Your Launchpad</p>
        <h2>Our teams are built around real work</h2>
        <div className="join-role-grid">
          <article>
            <img src={`${import.meta.env.BASE_URL}images/projects/cryo.jpg`} alt="Control systems project" />
            <div><h3>Control Systems Engineering</h3><p>Develop flight control algorithms, sensor fusion, embedded systems, and simulation tools for rocket stabilization and guidance.</p></div>
          </article>
          <article>
            <img src={`${import.meta.env.BASE_URL}images/projects/lre-gen4.png`} alt="Propulsion and mechanical engineering project" />
            <div><h3>Propulsion &amp; Mechanical Engineering</h3><p>Design and test engines, fluid systems, cooling methods, structures, and the hardware that turns a concept into a working machine.</p></div>
          </article>
          <article>
            <img src={`${import.meta.env.BASE_URL}images/projects/power-systems.jpg`} alt="Business and operations project" />
            <div><h3>Business &amp; Operations</h3><p>Build partnerships, coordinate projects, support team operations, and help a technical organization move with purpose.</p></div>
          </article>
        </div>
      </section>

      <section className="join-section join-openings">
        <div className="join-opening-image" aria-hidden="true" />
        <div className="join-opening-content">
          <p className="eyebrow">Current Openings</p>
          <h2>Bring your curiosity</h2>
          <div className="opening-list">
            <article><span>Control Systems</span><h3>Control System Algorithm Engineer</h3><p>Build stabilization, state estimation, sensor fusion, and closed-loop trajectory systems.</p></article>
            <article><span>Control Systems</span><h3>Simulation &amp; Modelling Engineer</h3><p>Build high-fidelity flight simulations that guide design and mission planning.</p></article>
            <article><span>Aerodynamics</span><h3>Aerodynamics Engineer</h3><p>Develop CFD data and aerodynamic models to improve vehicle performance.</p></article>
            <article><span>Propulsion R&amp;D</span><h3>Propulsion R&amp;D Member</h3><p>Research and develop nozzles, injectors, thrust chambers, cooling, valves, and sensors.</p></article>
          </div>
        </div>
      </section>

      <section className="join-details join-section">
        <p className="eyebrow">Information For All Positions</p>
        <h2>What we look for</h2>
        <div className="join-details-grid">
          <div>
            <h3>General Qualifications</h3>
            <ul>
              <li>Outstanding written and oral communication skills</li>
              <li>Ability to promote teamwork and leadership within a discipline</li>
              <li>Effective time management and organizational skills</li>
              <li>Professional contribution and quality of work</li>
            </ul>
          </div>
          <div>
            <h3>Education &amp; Experience</h3>
            <ul>
              <li>Preference for SFU students in technical degrees</li>
              <li>Portfolios and related experience are valued</li>
              <li>All levels of experience are encouraged to apply</li>
              <li>Curiosity, care, and a willingness to learn</li>
            </ul>
          </div>
          <div>
            <h3>General Details</h3>
            <ul>
              <li>Part-time, volunteer student design team position</li>
              <li>Hybrid remote and in-person collaboration</li>
              <li>Minimum commitment of 8 hours each week</li>
              <li>Typically a minimum 12-month project commitment</li>
            </ul>
          </div>
        </div>
        <p className="join-statement">SFU Rocketry is an inclusive and equal-opportunity organization. We welcome, include, and respect all people who want to help advance aerospace technology.</p>
      </section>
    </div>
  );
}
