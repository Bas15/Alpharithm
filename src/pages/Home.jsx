import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import CompaniesSection from "../components/CompaniesSection";
import AIModelsSection from "../components/AiModelSection";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CompaniesSection />
      <AIModelsSection />
    </Layout>
  );
};

export default Home;
