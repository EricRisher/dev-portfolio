import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the native form submission

    emailjs.sendForm('service_224p4me', 'template_h18hbis', form.current, '2f33Ymo02d8DFKvSh')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });
  };

return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lets work together!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name*</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name*</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email*</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="number"
              id="phone-number"
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" name="topic">
            <option>Select One...</option>           
            <option>Hiring Inquiry</option>
            <option>Project Inquiry</option>
            <option>Freelance Work</option>
            <option>Feedback on Project</option>
            <option>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
            required
          />
        </label>
        <div>
          <input type="submit" value='Submit' className="btn btn-primary contact--form--btn"></input>
        </div>
      </form>
    </section>
  );
}