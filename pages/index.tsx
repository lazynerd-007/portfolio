import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Works from "../components/Works/Works";
import AboutMe from "../components/AboutMe/AboutMe";
import Marquee from "../components/Marquee/Marquee";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Works />
      <AboutMe />
      <Marquee />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;