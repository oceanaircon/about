import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/*<!-- Footer Location-->*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Austria
                <br />
              </p>
            </div>
            {/*<!-- Footer Social Icons-->*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://github.com/oceanaircon"
              >
                <i className="fab fa-fw fa-github"></i>
                <Image
                  src="/github-mark-white.png"
                  width={40}
                  height={40}
                  alt="github_icon"
                />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/oliver-thek-4740812b8/"
              >
                <Image
                  src="/linkedin.png"
                  width={40}
                  height={40}
                  alt="linkedin_icon"
                />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
            {/*<!-- Footer About Text-->*/}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- Copyright Section-->*/}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; OT 2024</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
