const jobs = [
  { company: "RedLife", role: "Full Stack Mobile Developer", date: "Jan 2026 — Present", type: "Part time", description: "Building a React Native app for iOS and Android, alongside a Laravel backend and the APIs connecting mobile and web." },
  { company: "Markaz.pk", role: "React Native App & Web Developer", date: "Feb 2025 — Present", type: "Part time", description: "Developing and maintaining the mobile app, improving database connectivity, and building features for the content management dashboard." },
  { company: "GRIPHENS Technologies", role: "Full Stack Developer", date: "Oct 2023 — Apr 2024", type: "Internship", description: "Delivered WordPress, Webflow, and React websites, including backend functionality, third-party integrations, and implementation of UI designs." },
];
export const Experience = () => <section id="experience" className="experience-section frame" aria-labelledby="experience-title">
  <div className="section-opening"><h2 id="experience-title" data-reveal>Experience</h2><a className="text-link" href="/Hamza%20Shehzad_Resume.pdf" target="_blank" rel="noreferrer" data-reveal>Read my résumé</a></div>
  <div className="experience-list">{jobs.map(job => <article key={job.company}><div className="job-date" data-reveal><span>{job.date}</span><span>{job.type}</span></div><div data-reveal data-delay="70"><h3>{job.company}</h3><p className="job-role">{job.role}</p></div><p data-reveal data-delay="140">{job.description}</p></article>)}</div>
</section>;
