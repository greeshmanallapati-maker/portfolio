import "./Projects.css";

const projects = [
  {
    num: "01",
    total: "02",
    title: "Mythology Chatbot",
    description:
      "An intelligent chatbot built with NLP techniques including intent recognition and context-aware response generation, enabling natural and meaningful user interaction.",
    tags: ["NLP", "Python", "Chatbot"],
    link: "https://github.com/greeshmanallapati-maker/mythology-chatbot",
  },
  {
    num: "02",
    total: "02",
    title: "Airway Reservation System",
    description:
      "A full flight reservation system built using OOP principles — encapsulation, inheritance, and modular design — handling booking, cancellation, and scheduling end-to-end.",
    tags: ["OOP", "Python", "System Design"],
    link: "https://github.com/greeshmanallapati-maker/airway-reservation",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-head">
        <h1>Projects</h1>
        <p>Things I've designed and built</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="proj-card" key={project.num}>
            <div className="proj-meta">
              <span className="proj-num">
                {project.num} / {project.total}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      <div className="proj-footer">
        Built with React &nbsp;·&nbsp; © 2026 Greeshma Nallapati
      </div>
    </div>
  );
}

export default Projects;
