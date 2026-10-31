import { projects } from "@/data/projects";

export function ProductVisual({ project, view = 0, eager = false }: { project: typeof projects[number]; view?: number; eager?: boolean }) {
  const loading = eager ? "eager" : "lazy";
  return <div className={`product-visual visual-${project.id}`}>
    {project.id === "redlife" ? <div className="donor-screens" key={view}>
      {[0, 1, 2].map((offset) => <img key={offset} src={project.screens[(view + offset) % project.screens.length]} alt={["RedLife donor search", "RedLife donor registration", "RedLife support assistant"][(view + offset) % 3]} width="1290" height="2796" loading={loading} />)}
    </div> : <img key={view} className="product-composite" src={project.screens[view % project.screens.length]} alt={project.alt} width={project.id === "auraze" && view === 0 ? 794 : 1920} height={project.id === "auraze" && view === 0 ? 535 : 1080} loading={loading} />}
  </div>;
}
