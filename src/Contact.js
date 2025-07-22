import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_CONTACT_FORM, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          e.target.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <div id="banner" />

      <div
        id="business-inquiries"
        style={{ fontSize: 16, margin: "15px 0px 150px 150px" }}
      >
        <p
          style={{
            fontSize: 17.5,
            padding: "150px 100px 150px 0px",
            textAlign: "justify",
            marginLeft: 300,
            marginRight: 300,
            marginBottom:50,
            paddingBottom: 0,
          }}
        >
          If you'd like to contact me for any reason at all, do not hesitate to
          contact me on the following email or send me a DM on social media!
          <br />
          Commissions/business inquiries:{" "}
          <a href="mailto:lespodsay@gmail.com">lespodsay@gmail.com</a>
        </p>

        <div className="container contact-page" style={{display:"flex", justifyContent: "center", margin: "auto" }}>
          <div className="side-image">
            <div className="image-container">
                <div className="contact-page-image">
                    <a
                        href="img/magicalMiraiMiku2024.jpeg"
                        data-lightbox="artwork"
                        data-title="Genshin Impact Xiao by Lespodsay"
                    >
                        <img src="img/magicalMiraiMiku2024.jpeg" style={{ width: 250 , height: "auto", borderRadius: 10, marginRight: 0, paddingLeft: 0 }}/>
                    </a>
                </div>
            </div>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
                autoComplete="off"
                required=""
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                autoComplete="off"
                required=""
              />
              <textarea
                rows={5}
                cols={60}
                name="message"
                placeholder="Contact Me Here..."
                autoComplete="off"
                required=""
                defaultValue={""}
              />
              <button type="submit" name="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
