import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9o0e76",
        "template_sn2jusf",
        form.current,
        "5CLmWgALQwEwhibpq"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="contact">
        <h2 className="contactPageTitle">Contact Me</h2>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
