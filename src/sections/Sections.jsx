import { useState } from 'react'
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi'
import Section from '../components/Section'
import { profile as p } from '../data/profile'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import { experience, education, certifications, achievements } from '../data/experience'

const Tags = ({ items }) => <ul className="tags">{items.map(t => <li key={t}>{t}</li>)}</ul>

export const About = () => (
  <Section id="about" title="About">
    <div className="prose">{p.about.map((t, i) => <p key={i}>{t}</p>)}</div>
  </Section>
)
export const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="grid g3">{skills.map(s => (
      <div className="card" key={s.group}><h3>{s.group}</h3><Tags items={s.items} /></div>
    ))}</div>
  </Section>
)
export const Experience = () => (
  <Section id="experience" title="Internship">
    {experience.map(e => (
      <article className="card" key={e.role}>
        <p className="meta">{e.type} · {e.period}</p>
        <h3>{e.role}</h3><p className="muted">{e.org}</p>
        <ul className="list">{e.points.map(x => <li key={x}>{x}</li>)}</ul>
        <Tags items={e.tech} />
      </article>
    ))}
  </Section>
)
export const Projects = () => (
  <Section id="projects" title="Projects">
    <p className="muted sub">Academic and competition projects.</p>
    <div className="grid g2">{projects.map(pr => (
      <article className="card proj" key={pr.name}>
        <p className="meta">{pr.year}{pr.badge && <span className="badge"><FiAward /> {pr.badge}</span>}</p>
        <h3>{pr.name}</h3>
        <p>{pr.description}</p>
        <p className="muted"><strong>Problem:</strong> {pr.problem}</p>
        <ul className="list">{pr.features.map(f => <li key={f}>{f}</li>)}</ul>
        <Tags items={pr.tech} />
        <div className="btns small">
          {pr.github ? <a className="btn" href={pr.github}><FiGithub /> GitHub</a> : <span className="soon">GitHub: coming soon</span>}
          {pr.demo && <a className="btn" href={pr.demo}><FiExternalLink /> Live demo</a>}
        </div>
      </article>
    ))}</div>
  </Section>
)
export const Education = () => (
  <Section id="education" title="Education">
    <ol className="timeline">{education.map(e => (
      <li key={e.degree}><p className="meta">{e.period}</p><h3>{e.degree}</h3><p className="muted">{e.school}</p><p>{e.score}</p></li>
    ))}</ol>
  </Section>
)
export const Certifications = () => (
  <Section id="certifications" title="Certifications">
    <div className="grid g2">{certifications.map(c => (
      <div className="card" key={c.name}><p className="meta">{c.year} · {c.domain}</p><h3>{c.name}</h3><p className="muted">{c.org}</p></div>
    ))}</div>
  </Section>
)
export const Achievements = () => (
  <Section id="achievements" title="Achievements & Activities">
    <ul className="list wide">{achievements.map(a => <li key={a}>{a}</li>)}</ul>
  </Section>
)
export function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  // No backend: opens the visitor's mail app addressed to you.
  const send = e => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${p.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
  }
  return (
    <Section id="contact" title="Contact">
      <div className="grid g2">
        <div className="prose">
          <p>Open to fresher Systems Engineer and software roles. Happy to relocate anywhere in India.</p>
          <p><a href={`mailto:${p.email}`}>{p.email}</a></p>
          <p className="muted">{p.location}</p>
          <p><a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> · <a href={p.github} target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
        <form className="card form" onSubmit={send}>
          <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Subject<input required value={f.subject} onChange={set('subject')} /></label>
          <label>Message<textarea required rows="4" value={f.message} onChange={set('message')} /></label>
          <button className="btn primary" type="submit">Send email</button>
        </form>
      </div>
    </Section>
  )
}
