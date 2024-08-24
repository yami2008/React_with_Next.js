import Image from "next/image";
import Navbar from "@/components/Navbar";
import Home from "@/app/index/page";
import About from "@/app/about/page";
import Projects from "@/app/projects/page";
import Footer from "@/components/Footer";

export default function Accueil() {
  return (
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Footer */}
        <Footer />
      </div>
  );
}
