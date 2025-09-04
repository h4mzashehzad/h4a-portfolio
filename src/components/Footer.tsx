import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-6">
      <div className="container mx-auto flex items-center justify-between px-4 text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Hamza Shehzad
        </p>
        <nav className="flex items-center gap-4">
          <a
            href="https://github.com/h4mzashehzad"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-200"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
