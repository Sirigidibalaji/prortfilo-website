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
        <div className="term" role="img" aria-label="Terminal-style illustration of a door unlock audit log">
          <div className="term-bar"><i /><i /><i /><span>smart-door / audit.log</span></div>
          <pre>{`[rfid]   card scanned
[auth]   access granted
[relay]  door unlocked
[mqtt]   alert -> mobile
[audit]  event logged

# illustrative output`}</pre>
        </div>
      </div>
    </section>
  )
}
