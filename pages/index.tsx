import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Works from "../components/Works/Works";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Works />
    </Layout>
  );
};

export default Home;