import Nav from "./nav";
import Footer from "./footer";
import Portfolio from "./portfolio";
import Masthead from "./masthead";
import About from "./about";
import Contact from "./contact";

export default function Page() {
  return (
    <div>
      <Nav />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
