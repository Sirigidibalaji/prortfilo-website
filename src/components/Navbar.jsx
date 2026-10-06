import { useState } from 'react'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
const links = ['Home', 'Projects', 'About', 'Contacts']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo" aria-label="Balaji Sirigidi home">
          <span className="logo-mark" aria-hidden="true">BS</span>
          <span className="logo-wordmark">Balaji <strong>Sirigidi</strong></span>
        </a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
        <nav aria-label="Primary" className={open ? 'links open' : 'links'}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <div className="nav-icons" aria-label="Social links">
          <a href="#contact" aria-label="Email"><FiGithub /></a>
          <a href="#contact" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>
    </header>
  )
}
