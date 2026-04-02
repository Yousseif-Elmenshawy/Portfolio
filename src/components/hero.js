import imgs from "../imgs/WhatsApp Image 2025-11-07 at 14.33.30_6da9f0cc.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div id="img" data-reveal="right">
          <img id="myImg" src={imgs} alt="Yousseif Elshenawy" />
        </div>
        <div id="text" data-reveal="left">
          <h1>
            Yousseif <span>Elshenawy</span>
          </h1>
          <p>Front End Developer</p>
          <br />
          <a
            href="#contact"
            id="CTA"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
