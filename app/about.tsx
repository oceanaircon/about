import React from "react";
import "@/app/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

const About = () => {
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
              Worked on various aspects of web development, from front-end to
              back-end. Contributed to the development of RESTful APIs using
              Node.js and Express. Implemented and maintained database
              structures using SQL and MongoDB. Participated in code reviews to
              ensure high-quality code and adherence to coding standards.
              Collaborated with UI/UX designers to create visually appealing and
              intuitive user interfaces.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              Developed and maintained robust server-side components using
              Node.js and PHP. Designed and implemented responsive and dynamic
              user interfaces using React.js and Next.js. Utilized TypeScript to
              enhance code maintainability and scalability. Integrated
              third-party APIs and services to extend the functionality of web
              applications. Optimized database queries and ensured efficient
              data storage and retrieval.
            </p>
          </div>
        </div>
        {/*<!-- About Section Button-->*/}
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/theme/freelancer/"
          >
            <i className="fas fa-download me-2"></i>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
