import { useState } from "react";
import { projects } from "@/data/projects";
import { ProductVisual } from "@/components/ProductVisual";

function Project({ project }: { project: typeof projects[number] }) {
  const [view, setView] = useState(0);
  return <article className={`project project-${project.id}`} id={`project-${project.id}`}>
    <div className="project-picture" data-reveal="image"><ProductVisual project={project} view={view} /><button className="project-browse" onClick={() => setView(value => value + 1)} aria-label={`Show next ${project.title} screen`}>Next screen <span aria-hidden="true">→</span></button></div>
    <div className="project-information">
      <h3 data-reveal>{project.title}</h3>
      <p className="project-subtitle" data-reveal data-delay="70">{project.subtitle}</p>
      <p data-reveal data-delay="140">{project.description}</p>
      <p className="project-role" data-reveal>{project.contribution}</p>
      <div className="project-details" data-reveal><span>{project.stack}</span><a className="project-visit" href={project.url} target="_blank" rel="noreferrer">View project</a></div>
    </div>
  </article>;
}
export const Projects = () => <section id="work" className="work-section frame" aria-labelledby="work-title">
  <div className="section-opening"><h2 id="work-title" data-reveal>Selected work</h2><p data-reveal>Four products.<br />Four different problems to solve.</p></div>
  <div className="projects">{projects.map(project => <Project project={project} key={project.id} />)}</div>
  <div className="work-close" data-reveal><p>This portfolio is part of the work, too.<br />Built with React, TypeScript & Tailwind.</p><a href="https://github.com/h4mzashehzad" target="_blank" rel="noreferrer">More on GitHub</a></div>
</section>;
