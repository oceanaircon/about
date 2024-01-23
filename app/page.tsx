import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faBars,
  faAnchor,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            Oliver Thek
          </a>
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
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*<!-- Masthead-->*/}
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
      {/*<!-- Portfolio Section-->*/}
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
          <div className="row justify-content-center">
            {/*<!-- Portfolio Item 1-->*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/cabin.png"
                  alt="..."
                />
              </div>
            </div>
            {/*<!-- Portfolio Item 2-->*/}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/cake.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- About Section-->*/}
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
                structures using SQL and MongoDB. Participated in code reviews
                to ensure high-quality code and adherence to coding standards.
                Collaborated with UI/UX designers to create visually appealing
                and intuitive user interfaces.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">
                Developed and maintained robust server-side components using
                Node.js and PHP. Designed and implemented responsive and dynamic
                user interfaces using React.js and Next.js. Utilized TypeScript
                to enhance code maintainability and scalability. Integrated
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
      {/*<!-- Contact Section-->*/}
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
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/*<!-- Name input-->*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                {/*<!-- Email address input-->*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>

                {/*<!-- Message input-->*/}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                {/*<!-- Submit success message-->*/}
                {/*<!---->*/}
                {/*<!-- This is what your users will see when the form-->*/}
                {/*<!-- has successfully submitted-->*/}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/*<!-- Submit error message-->*/}
                {/*<!---->*/}
                {/*<!-- This is what your users will see when there is-->*/}
                {/*<!-- an error submitting the form-->*/}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/*<!-- Submit Button-->*/}
                <button
                  className="btn btn-primary btn-xl disabled"
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- Footer-->*/}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/*<!-- Footer Location-->*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Hungary
                <br />
              </p>
            </div>
            {/*<!-- Footer Social Icons-->*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
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
}
