import React, { useState } from "react";
// import validator function for email
import { validateEmail } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // use empty const declaration for error message. If error is
  // detected, have it appear below <textarea> element with corresponding
  // error message.
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      // run the validator function we imported up top
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid. Please enter again");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section id="section-contact" className="row">
      <h1 className="d-flex justify-content-center align-items-center">
        Reach me via email!
      </h1>
      <p className="text-info">
        Do ipsum est duis eu consectetur ipsum aliquip magna velit sunt magna
        aliqua id. Sunt irure amet sunt labore nulla deserunt. Ullamco ad do
        Lorem nisi sunt veniam ipsum culpa elit pariatur. Labore laborum sit
        dolor culpa eu eiusmod minim sit deserunt eiusmod nulla laboris officia.
        Elit qui sint est duis pariatur dolor eu dolor voluptate eu pariatur eu.
        Incididunt magna id cillum sunt et consequat qui aliqua exercitation
        sunt sunt. Reprehenderit sit do culpa aute anim non qui dolor elit. Non
        cillum consectetur nulla officia labore do cillum officia eiusmod esse
        ullamco ipsum. Aute consectetur sunt mollit laborum aliqua aliquip ipsum
        do. Mollit veniam occaecat dolor pariatur exercitation. Et sunt et est
        consequat voluptate officia minim. Laborum ut nulla laborum nisi. Dolore
        aliquip elit ullamco incididunt minim officia cupidatat minim duis
        exercitation eiusmod adipisicing eiusmod sit. Qui velit reprehenderit
        deserunt eu irure sunt aliqua enim. Ut elit cillum nostrud aliquip anim
        labore aute eu nisi in mollit pariatur. Velit ad excepteur veniam dolor
        nisi velit. Excepteur laboris officia in magna commodo qui et
        exercitation ut in laboris. Non occaecat esse anim quis ipsum irure elit
        id amet consequat.
      </p>
      <form
        className=""
        id="contact-form"
        onSubmit={handleSubmit}
      >
        <h2>
          Email me @:{" "}
          <span className="text-info">james.compagnoni@gmail.com</span>
        </h2>
        
        <div className="d-flex">
          <div className="d-flex flex-column">
            <label htmlFor="name" className="me-2">
              Your Name:
            </label>
            <label htmlFor="email" className="me-2">
              Your Email:
            </label>
            <label htmlFor="message">Your Message:</label>
          </div>
          <div className="d-flex flex-column w-25 ms-2">
            <input
              type="text"
              name="name"
              defaultValue={name} // const 'name' declared at beginning of component; initial value just empty string
              onBlur={handleChange}
            />
            <input
              type="email"
              name="email"
              defaultValue={email} // const 'email' declared at beginning of component; initial value just empty string
              onBlur={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
        </div>

        <div></div>
        {/* short-circuit: if errorMessage is true then show div with the message */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button
          className="w-25 h-25 mt-3 d-flex justify-content-center align-items-center"
          id="contact-submit-btn"
          type="submit"
          formMethod="post"
        >
          <FontAwesomeIcon
            icon={faBolt}
            className="font-awesome-code-icon"
          ></FontAwesomeIcon>
          <span className="fs-3 mx-2">Send to James</span>
          <FontAwesomeIcon
            icon={faBolt}
            className="font-awesome-code-icon"
          ></FontAwesomeIcon>
        </button>
      
      </form>
    </section>
  );
}

export default Contact;
