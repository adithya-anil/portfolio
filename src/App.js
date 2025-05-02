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

      {/* About & Experience - With Cards */}
      <section className="section">
        <motion.div className="section-column project-card" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">📘 About Me</h2>
          <p>
          I am a third-year BSc Computer Science student with a strong focus on full-stack development and modern web technologies. To enhance my skills beyond the classroom, I completed a Full Stack Development program with Steyp, where I gained hands-on experience in technologies like React, Node.js, Django, and database management.

          This training combined with academic learning has equipped me with a solid foundation in building scalable applications, working with APIs, and collaborating in agile environments—preparing me for real-world development challenges.
          </p>
        </motion.div>

        <motion.div className="section-column project-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">🎯 My Experience with Steyp</h2>
          <p>
          My experience with Steyp has been a key milestone in my development journey. Starting with minimal experience in backend technologies, the program helped me gain confidence and clarity through hands-on learning in areas like server-side logic, database integration, and API development.

          It provided a structured, project-driven environment that allowed me to apply theoretical concepts in practical scenarios—enhancing both my technical skills and my ability to contribute effectively to real-world software projects.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          🚀 Featured Projects
        </motion.h2>

        <div className="projects-grid">
          <motion.div className="project-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <img src="/project1.jpg" alt="Second-Hand Marketplace" className="project-image" />
            <h3 className="project-name">Second-Hand Marketplace</h3>
            <p className="project-description">
              A PWA platform for buying and selling second-hand products like dresses, crafts, and more. Built using React, Node.js, and MongoDB.
            </p>
            <div className="project-links">
              <a href="#" target="_blank" className="btn">Live Demo</a>
              <a href="#" target="_blank" className="btn-secondary">GitHub</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <motion.div className="project-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="section-title">🛠 Tech Stack</h2>
          <div className="skills-icons">
            <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Python</span>
            <span>React</span><span>Django</span><span>Node.js</span><span>Bootstrap</span>
            <span>JQuery</span><span>MySQL</span><span>GitHub</span><span>Postman</span><span>API</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <motion.div className="project-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="section-title">📫 Get in Touch</h2>
          <div className="contact-details">
            <p><Mail size={18}/> adithyaanil21102005@gmail.com</p>
            <p><Linkedin size={18}/> <a href="https://linkedin.com/in/linkme25" target="_blank" rel="noopener noreferrer">linkedin.com/in/linkme25</a></p>
            <p><Github size={18}/> <a href="https://github.com/adithya-anil" target="_blank" rel="noopener noreferrer">github.com/adithya-anil</a></p>
            <p><FileText size={18}/> <a href="/Resume%20-%20Adithya%20Anil.pdf" target="_blank" rel="noopener noreferrer" download>Download My Resume</a></p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Adithya Anil. Made with ❤️ | Innovating to solve real-world challenges with technology.</p>
      </footer>
    </div>
  );
}
