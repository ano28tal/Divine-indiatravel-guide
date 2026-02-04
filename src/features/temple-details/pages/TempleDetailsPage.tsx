import { Navigation, Footer } from "@/shared/components";
import { TempleDetails } from "../components";

const TempleDetailsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <TempleDetails />
      </div>
      <Footer />
    </div>
  );
};

export default TempleDetailsPage;
