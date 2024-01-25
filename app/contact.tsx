import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import Form from "@/app/ui/form";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/*<!-- Contact Section Heading-->*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/*<!-- Icon Divider-->*/}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon
              style={{ fontSize: "25px" }}
              icon={faAnchor}
            ></FontAwesomeIcon>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/*<!-- Contact Section Form-->*/}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
