import { useTempleDetails } from "../../hooks/useTempleDetails";
import TempleDetailsLoading from "./TempleDetailsLoading";
import TempleDetailsError from "./TempleDetailsError";
import TempleDetailsContent from "./TempleDetailsContent";

const TempleDetails = () => {
  const { templeDetails, isLoading, error } = useTempleDetails();

  if (isLoading) {
    return <TempleDetailsLoading />;
  }

  if (error || !templeDetails) {
    return <TempleDetailsError />;
  }

  return <TempleDetailsContent temple={templeDetails} />;
};

export default TempleDetails;
