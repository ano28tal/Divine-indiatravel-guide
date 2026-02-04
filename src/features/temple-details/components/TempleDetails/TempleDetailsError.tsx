import { Link } from "react-router-dom";
import { browserRoutes } from "@/constants/browserRoutes";

const TempleDetailsError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-2xl font-bold text-foreground">Temple Not Found</h2>
      <p className="text-muted-foreground text-center">
        Sorry, we couldn't find the temple you're looking for.
      </p>
      <Link
        to={browserRoutes.home}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default TempleDetailsError;
