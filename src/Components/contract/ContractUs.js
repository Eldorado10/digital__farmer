import React from "react";
// import leaf from "../../Image/femalefarm.jpeg"
import "./contract.css"

const Contact = () => {
  return (
    <section>
      <div className="contact">
      <div className="">
        <p className="text-success">
          Contact Us
        </p>
        <h1>Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={6}
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </div>
    </section>
  );
};

export default Contact;
