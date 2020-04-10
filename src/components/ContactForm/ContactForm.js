import React from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm({ heading }) {
  return (
    <div className={styles.contactForm}>
      <span className={styles.heading}>{heading}</span>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <label>
          Name
          <input type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject" placeholder="Subject" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows="5" placeholder="Message" />
        </label>
        <Button type="submit" className={styles.submitButton} label="Submit" />
        {/* <input type="reset" value="Clear" /> */}
      </form>
    </div>
  );
}
