import "../App.scss";
import img from "../imgs/WhatsApp Image 2025-11-07 at 14.33.30_6da9f0cc.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  // Activate scroll-reveal for every [data-reveal] element in the page
  useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="container">
        {/* ── Heading slides up ── */}
        <div id="text" data-reveal="up">
          <h1>About</h1>
        </div>

        <br />

        <div id="container-about">
          {/* ── Image slides in from the left ── */}
          <div className="about-img" data-reveal="left" data-reveal-delay="100">
            <img className="AboutIMG" src={img} alt="Yousseif Elshenawy" />
          </div>

          {/* ── Text block slides in from the right ── */}
          <div
            className="about-content"
            data-reveal="right"
            data-reveal-delay="250"
          >
            <p style={{ textAlign: "left", fontSize: "2rem" }}>
              Full-Stack Developer with experience building modern and responsive
              web applications. Currently a Grade 3 Programming student at WE
              Applied Technology School. Passionate about software development
              and continuously improving my skills. Built several web projects
              available on GitHub. Quick learner with a strong
              interest in exploring new technologies. Enjoy turning ideas into
              functional and user-friendly applications. Team player who enjoys
              collaboration and solving problems. Always looking for
              opportunities to gain real-world experience. Focused on learning,
              growing, and becoming a better developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
