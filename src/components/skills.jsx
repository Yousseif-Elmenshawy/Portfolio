import "../App.scss";
import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPython , FaSass , FaPhp , FaLaravel  } from "react-icons/fa";
import { SiJavascript, SiMysql, SiBootstrap } from "react-icons/si";

const SKILLS = [
  {
    id: "html",
    name: "HTML",
    progress: 90,
    icon: <FaHtml5 />,
    color: "#e34c26",
  },
  {
    id: "css",
    name: "CSS",
    progress: 85,
    icon: <FaCss3Alt />,
    color: "#264de4",
  },
  {
    id: "javascript",
    name: "JavaScript",
    progress: 80,
    icon: <SiJavascript />,
    color: "#f0db4f",
  },
  {
    id: "react",
    name: "React",
    progress: 75,
    icon: <FaReact />,
    color: "#61dafb",
  },
  {
    id: "sql",
    name: "SQL",
    progress: 70,
    icon: <SiMysql />,
    color: "#f29111",
  },
  {
    id: "bootstrap",
    name: "BootStrap",
    progress: 65,
    icon: <SiBootstrap />,
    color: "#7952b3",
  },
  {
    id: "python",
    name: "Python",
    progress: 90,
    icon: <FaPython />,
    color: "#006effff",
  },
  {
    id: "sass",
    name: "Sass",
    progress: 80,
    icon: <FaSass />,
    color: "rgb(250, 6, 189)"
  },
  {
    id: "php",
    name: "PHP",
    progress: 70,
    icon: <FaPhp />,
    color: "rgb(201, 6, 250)"
  },
  {
    id: "laravel",
    name: "Laravel",
    progress: 50,
    icon: <FaLaravel />,
    color: "rgb(250, 6, 6)"
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".progress-bar").forEach((bar) => {
            bar.classList.add("animate");
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div id="text" data-reveal="up">
          <h1>Skills</h1>
          <p className="skills-subtitle">Technologies I work with</p>
        </div>
        <br />
        <div id="container-skills">
          {SKILLS.map((skill, index) => (
            <div
              className="skill"
              id={skill.id}
              key={skill.id}
              data-reveal="up"
              data-reveal-delay={index * 100}
            >
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <p>{skill.name}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    "--target-width": skill.progress + "%",
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
              <span className="skill-percent">{skill.progress}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
