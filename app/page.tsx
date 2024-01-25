import Nav from "@/app/nav";
import Footer from "@/app/footer";
import Portfolio from "@/app/portfolio";
import Masthead from "@/app/masthead";
import About from "@/app/about";
import Contact from "@/app/contact";

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
