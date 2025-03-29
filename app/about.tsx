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
              <span>
                My name is Oliver Thek, I am a Front End Web Developer with 2+
                years of experience in building robust and scalable web
                applications using Next.js, React.js, TypeScript and Tailwind
                CSS, committed to write clean, high quality code with automated
                testing. I have a special sense for refactoring code.
              </span>
            </ul>
          </div>
          <div className="col-lg-4 ms-auto">
            <p className="lead"></p>
            <h3>SKILLS</h3>
            <ul>
              <li>Creativity, problem-solving</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>TypeScript, React.js, Next.js</li>
              <li>Relational Databases</li>
              <li>Git</li>
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
