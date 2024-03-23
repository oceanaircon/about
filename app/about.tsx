import React from "react";
import "@/app/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DownloadButton from "./ui/DownloadButton";

const About = () => {
  const url = process.env.URL + "public/theko_resume.pdf";
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        {/*<!-- About Section Heading-->*/}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/*<!-- Icon Divider-->*/}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon
              style={{ fontSize: "25px" }}
              icon={faAnchor}
            ></FontAwesomeIcon>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/*<!-- About Section Content-->*/}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <h3>PRACTICE</h3>
            <ul>
              <li>Full-stack web developer</li>
              <li>HTML5, CSS3, Javascript - 3 years</li>
              <li>MySQL, MongoDB, ORM - 3 years</li>
              <li>Typescript, Node, React, Next.js - 2 years </li>
              <li>Building Rest API with Node.js or PHP</li>
              <li>Git - 2 years</li>
              <li>C#, .NET, Java, Python, PHP - 2 years </li>
            </ul>
          </div>
          <div className="col-lg-4 ms-auto">
            <p className="lead"></p>
            <h3>SKILLS</h3>
            <ul>
              <li>Passionate about coding </li>
              <li>
                Ability to solve problems and to adjust to deadlines and project
                goals
              </li>
              <li>Fluent in English</li>
              <li>Relevant education and series of projects</li>
            </ul>
          </div>
        </div>
        {/*<!-- About Section Button-->*/}
        <div className="text-center mt-4">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};

export default About;
