import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Adjust the import path as needed

function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.target;

    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Reset the form fields after successful submission
      } else {
        // Handle errors here
      }
    } catch (error) {
      // Handle errors here
    }
  };

  if (submitted) {
    return <p className={styles.thankYouMessage}>Thank you for your message! I will get back to you soon.</p>;
  }

  return (
    <div className={styles.formContainer}>
      <form 
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mvojngbp"  // Replace with your actual Formspree form ID
        method="post"
        onSubmit={handleSubmit}
      >
        <fieldset id="fs-frm-inputs">
          <div className={styles.formField}>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email-address">Email Address</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required />
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" name="message" id="message" placeholder="Your message here..." required></textarea>
          </div>

          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          <div className={styles.formField}>
            <input type="submit" value="Submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactForm;
