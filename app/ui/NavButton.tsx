import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Script from "next/script";

const NavButton = () => {
  return (
    <div>
      <button
        className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon
          style={{ fontSize: "25px" }}
          icon={faBars}
        ></FontAwesomeIcon>
      </button>
      <Script type="text/javascript" src="../../public/scripts.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
    </div>
  );
};

export default NavButton;
