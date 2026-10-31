import { useState } from "react";
export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("h4mzashehzad@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 2500); }
    catch { window.location.href = "mailto:h4mzashehzad@gmail.com"; }
  };
  return <footer id="contact" className="contact-section"><div className="frame">
    <div className="contact-top"><h2 data-reveal>Have a good idea?</h2><div><p data-reveal>A product to build, a problem to untangle,<br />or a place on your team. Let’s talk.</p><a className="primary-action" data-reveal href="mailto:h4mzashehzad@gmail.com?subject=Let%E2%80%99s%20build%20something&body=Hi%20Hamza%2C%0A%0AI%E2%80%99d%20love%20to%20talk%20about%20">Get in touch <span aria-hidden="true">↗</span></a></div></div>
    <div className="footer-links"><div className="email-links"><a className="contact-email" href="mailto:h4mzashehzad@gmail.com">h4mzashehzad@gmail.com</a><button className="copy-email" onClick={copyEmail} aria-live="polite">{copied ? "Copied!" : "Copy email"}</button></div><nav aria-label="Social and résumé links"><a href="https://github.com/h4mzashehzad" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/hamzashehzadpk/" target="_blank" rel="noreferrer">LinkedIn</a><a href="/Hamza%20Shehzad_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a><a href="#main">Back to top</a></nav></div>
    <p className="footer-name" aria-hidden="true" data-reveal><span>Hamza</span>{" "}<span>Shehzad</span></p>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Hamza Shehzad</span><span>Made with care. In Islamabad.</span></div>
  </div></footer>;
};
