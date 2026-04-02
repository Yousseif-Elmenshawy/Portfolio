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
              I am a front-end developer with experience in building web
              applications and i am a student in we school for applied
              technology.
              <br />
              I have many project in my github account and firebase, I am in
              grade two programming department.
              <br />
              I am a quick learner and i am always looking for new opportunities
              to improve my skills.
              <br />I am a team player and i am always looking for new
              opportunities to work in a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
