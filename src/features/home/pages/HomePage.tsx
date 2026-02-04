import { Navigation, Hero, AboutUs, Footer } from "@/shared/components";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default HomePage;
