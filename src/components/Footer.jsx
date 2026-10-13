export default function Footer() {
  return (
    <footer className="footer">
      <p>©{new Date().getFullYear()} SFU Rocketry</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/company/sfu-rocketry" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/sfurocketry/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/SFURocketry/" target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
}
