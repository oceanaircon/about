import React from "react";
import "@/app/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DownloadButton from "./ui/DownloadButton";

const About = () => {
  const url = process.env.URL + "public/ot_resume2024.pdf";
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
            <p className="lead">
              Development of full-stack web applications, desktop, and mobile
              applications
            </p>
            <p className="lead">
              Advanced knowledge in HTML5, CSS3, Javascript, Typescript, React,
              and Next.js for two years
            </p>
            <p className="lead">
              {" "}
              One-year experience in C#, .NET, Java, Python, and Php
            </p>
            <p className="lead">
              Several years of practice in designing, creating, and overseeing
              databases
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              SKILLS <br />
              Independent and a team player <br />
              Recognition and handling of errors and security vulnerabilities{" "}
              <br />
              Good logic and creativity <br />
              Understanding of documentation and instructions <br />
              Intermediate level of English language
            </p>
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
