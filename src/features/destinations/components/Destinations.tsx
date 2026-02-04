import { useDestinationNavigation } from "@/features/destinations/hooks/useDestinationNavigation";
import DestinationsHeader from "./DestinationsHeader";
import StatesGrid from "./StatesGrid";
import DistrictsGrid from "./DistrictsGrid";
import PlacesGrid from "./PlacesGrid";

const Destinations = () => {
  const { selectedState, selectedDistrict } = useDestinationNavigation();

  return (
    <section id="destinations" className="py-20 px-4 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <DestinationsHeader />

        {!selectedState && <StatesGrid />}

        {selectedState && !selectedDistrict && (
          <DistrictsGrid selectedState={selectedState} />
        )}

        {selectedDistrict && (
          <PlacesGrid
            selectedDistrict={selectedDistrict}
            selectedState={selectedState}
          />
        )}
      </div>
    </section>
  );
};

export default Destinations;
