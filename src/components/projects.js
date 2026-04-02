import "../App.scss";
import useScrollReveal from "../hooks/useScrollReveal";
import imgOne from "../imgs/Screenshot 2026-04-02 200503.png";
import imgTwo from "../imgs/Screenshot 2026-04-02 200558.png";
import imgThree from "../imgs/Screenshot 2026-04-02 200629.png";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: "project-1",
    title: "TCS WE App",
    description:
      "A modern analytics dashboard built with React, featuring real-time charts and a clean dark UI.",
    image: imgOne,
    liveUrl: "https://tcs-we.firebaseapp.com/",
    codeUrl: "#",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    id: "project-2",
    title: "Book Oasis project",
    description:"A landing page for a Cafe and Book store",
    image: imgTwo,
    liveUrl: "https://book-oasis-22bc8.firebaseapp.com/",
    codeUrl: "https://github.com/Yousseif-Elmenshawy/Book-Oasis-Project",
  tags: ["HTML", "CSS", "JavaScript","Bootstrap","Firebase"],
  },
  {
    id: "project-3",
    title: "Nova X project",
    description:"A powerful landing page for tech company",
    image: imgThree,
    liveUrl: "https://templates-491e7-36c37.firebaseapp.com/",
    codeUrl: "https://github.com/Yousseif-Elmenshawy/Templates/tree/main/Template%202",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export default function Projects() {
  useScrollReveal();

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        {/* ── Heading ── */}
        <div data-reveal="up">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">Things I have built</p>
        </div>

        {/* ── Cards grid ── */}
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              id={project.id}
              data-reveal="up"
              data-reveal-delay={index * 150}
            >
              {/* Image */}
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                />
                {/* Overlay with links */}
                <div className="project-card__overlay">
                  <Link
                    to={project.liveUrl}
                    className="project-card__btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </Link>
                  <Link
                    to={project.codeUrl}
                    className="project-card__btn project-card__btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
