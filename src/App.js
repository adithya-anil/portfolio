import './App.css';
import { Mail, Linkedin, Github, FileText, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      {/* Navbar */}
      <motion.nav className="navbar" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="navbar-inner">
          <h1 className="logo"><Menu size={20}/> Adithya</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="hero" id="about">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title">Hey, I'm Adithya 👋</h1>
          <p className="hero-subtitle">A passionate Full Stack Developer & Project Coordinator</p>
        </motion.div>
      </header>

      {/* About & Experience */}
      <section className="section">
        <motion.div className="section-column" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">📘 About Me</h2>
          <p>
            I am currently in my third year as a BSc Computer Science student, focused on full-stack development. I’ve completed a Full Stack Development course via Steyp, gaining both theoretical and practical skills.
          </p>
        </motion.div>

        <motion.div className="section-column" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">🎯 My Experience with Steyp</h2>
          <p>
            Steyp has been a transformative learning platform for me. Starting with limited knowledge, I’ve grown immensely in backend development and database management. It gave me confidence, direction, and clarity in my career path.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>🚀 Featured Projects</motion.h2>
        <div className="projects-grid">
          <motion.div className="project-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <img src="/project1.jpg" alt="Second-Hand Marketplace" className="project-image" />
            <h3 className="project-name">Second-Hand Marketplace</h3>
            <p className="project-description">A PWA platform for buying and selling second-hand products like dresses, crafts, and more. Built using React, Node.js, and MongoDB.</p>
            <div className="project-links">
              <a href="#" target="_blank" className="btn">Live Demo</a>
              <a href="#" target="_blank" className="btn-secondary">GitHub</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>🛠 Tech Stack</motion.h2>
        <div className="skills-icons">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span><span>React</span><span>Django</span><span>Node.js</span><span>Bootstrap</span><span>JQuery</span><span>MySQL</span><span>GitHub</span><span>Postman</span><span>API</span>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>📫 Get in Touch</motion.h2>
        <div className="contact-details">
          <p><Mail size={18}/> adithyaanil21102005@gmail.com</p>
          <p><Linkedin size={18}/> <a href="https://linkedin.com/in/linkme25" target="_blank" rel="noopener noreferrer">linkedin.com/in/linkme25</a></p>
          <p><Github size={18}/> GitHub link not provided</p>
          <p><FileText size={18}/> <a href="/Resume%20-%20Adithya%20Anil.pdf" target="_blank" rel="noopener noreferrer" download>Download My Resume</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Adithya Anil. Made with ❤️ | Innovating to solve real-world challenges with technology.</p>
      </footer>
    </div>
  );
}
