import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Achievements', 'Contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo">Balaji S.</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
        <nav aria-label="Primary" className={open ? 'links open' : 'links'}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
      </div>
    </header>
  )
}
