import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/*<!-- Masthead Avatar Image-->*/}
        <img src="cool-profile-icons-70.png" width={322} alt="profile_icon" />
        {/*<!-- Masthead Heading-->*/}
        <h1 className="masthead-heading text-uppercase mb-0">Oliver Thek</h1>
        {/*<!-- Icon Divider-->*/}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon
              style={{ fontSize: "40px" }}
              icon={faAnchor}
            ></FontAwesomeIcon>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/*<!-- Masthead Subheading-->*/}
        <p className="masthead-subheading font-weight-light mb-0">
          Full Stack Developer
        </p>
      </div>
    </header>
  );
};

export default Masthead;
