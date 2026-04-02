import { useState } from "react";

export default function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const navHeight =
        document.getElementById("NavComponent")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight - 20, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <nav id="NavComponent" className={scrolled ? "glass" : ""}>
      <h1
        style={{ cursor: "pointer" }}
        onClick={(e) => scrollToSection(e, "hero")}
      >
        Yousseif Elshenawy
      </h1>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="listNav" className={menuOpen ? "open" : ""} type="none">
        <li>
          <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#hero" onClick={(e) => scrollToSection(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
