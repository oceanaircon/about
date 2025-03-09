import React from "react";
import "@/app/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/*<!-- Portfolio Section Heading-->*/}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
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
        {/*<!-- Portfolio Grid Items-->*/}
        <div className="container text-center">
          <div className="row justify-content-center">
            <a href="https://printer-bookings.vercel.app">
              <h3>Printer Bookings</h3>
            </a>
            <h5>
              A printer rental admin dashboard, that can connect printers with
              customers in contracts, and ables to print worksheets from
              received issues.
            </h5>
          </div>
          <div className="row justify-content-center">
            <a href="https://teddlefoldre.vercel.app">
              <h3>Teddlefoldre</h3>
            </a>
            <h5>A social media web app</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
