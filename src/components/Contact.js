// src/components/Contact.js
import "../App.scss";
import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div data-reveal="up">
          <h1 className="contact-title">Contact Me</h1>
          <p className="contact-subtitle">Get in touch with me</p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-reveal="up"
          data-reveal-delay="150"
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={errors.message ? "input-error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error-text">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
