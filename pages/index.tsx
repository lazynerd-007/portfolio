import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Works from "../components/Works/Works";
import AboutMe from "../components/AboutMe/AboutMe";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Works />
      <AboutMe />
    </Layout>
  );
};

export default Home;