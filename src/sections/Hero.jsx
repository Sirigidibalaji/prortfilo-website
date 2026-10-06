import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { profile as p } from '../data/profile'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hi">Hi, I'm {p.name}</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.tagline}</p>
          <div className="btns">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href={p.resume} download><FiDownload /> Download Resume</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
          <div className="social">
            <a href={p.github} aria-label="GitHub" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href={p.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href={`mailto:${p.email}`} aria-label="Email"><FiMail /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile portrait panel">
          <div className="profile-panel">
            <div className="floating-badge badge-top">ASP.NET</div>
            <div className="profile-image-wrap">
              <img src="/profile-portrait.svg" alt="Professional portrait illustration" />
            </div>
            <div className="profile-details">
              <div>
                <span>6 Months</span>
                <small>Internship</small>
              </div>
              <div>
                <span>IoT</span>
                <small>RFID + MQTT</small>
              </div>
            </div>
            <div className="floating-badge badge-bottom">Open to roles</div>
          </div>
        </div>
      </div>
    </section>
  )
}
