import { FaPaperPlane } from "react-icons/fa6";

import "./Contacts.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact">
        <h1>contact me.</h1>
        <p style={{ marginLeft: "1px", fontSize: "0.9rem", color: "#b2c4aa" }}>
          shi don work yet, wip
        </p>
        <form className="contact-form">
          <div className="contact-row">
            <input type="text" name="name" placeholder="Name" required />

            <input type="email" name="email" placeholder="Email" required />
          </div>

          <textarea
            name="message"
            placeholder="Hi lol. Drop a message, website feedback, or let's have a fun chat"
            rows={5}
            required
          />

          <button type="submit">
            Send Message
            <FaPaperPlane />
          </button>

          <p className="privacy">
            By submitting this form, I agree to the privacy policy.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
