export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-h`}>
      <div className="wrap"><h2 id={`${id}-h`}>{title}</h2>{children}</div>
    </section>
  )
}
