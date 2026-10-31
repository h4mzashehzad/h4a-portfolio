import { useState } from "react";
import { projects } from "@/data/projects";
import { ProductVisual } from "@/components/ProductVisual";

export const Hero = () => {
  const [active, setActive] = useState(1);
  const [view, setView] = useState(0);
  const project = projects[active];
  return <section className="hero frame" aria-labelledby="hero-title">
    <h1 id="hero-title"><span>Hamza</span>{" "}<span>Shehzad</span></h1>
    <div className="hero-intro-row">
      <p className="hero-intro">Full stack developer. I build mobile apps and web products, from the interface to the systems behind it.</p>
      <a className="primary-action" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
    </div>
    <div className={`hero-exhibit exhibit-${project.id}`}>
      <div className="exhibit-top"><div className="project-picker" aria-label="Featured projects">{projects.map((item, index) => <button key={item.id} aria-pressed={active === index} onClick={() => { setActive(index); setView(0); }}>{item.shortTitle}</button>)}</div><span className="exhibit-platform">Mobile & web development</span></div>
      <div className="exhibit-content">
        <div className="exhibit-copy" key={project.id}>
          <h2>{project.title}</h2><p>{project.kind}</p>
          <a href={project.url} target="_blank" rel="noreferrer">Visit project</a>
        </div>
        <ProductVisual project={project} view={view} eager />
      </div>
      <div className="exhibit-bottom"><span>Built by Hamza. Used in the real world.</span><button className="next-view" onClick={() => setView(value => value + 1)}>Next screen <span aria-hidden="true">→</span></button></div>
    </div>
    <div className="hero-footnote"><span>Based in Islamabad, Pakistan</span><span>React Native, React & Laravel</span></div>
  </section>;
};
