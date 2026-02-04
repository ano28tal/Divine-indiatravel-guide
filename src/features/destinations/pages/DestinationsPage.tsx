import { Navigation, Footer } from "@/shared/components";
import { Destinations } from "../components";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Destinations />
      </div>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
