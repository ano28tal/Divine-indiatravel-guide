import { lazy, ComponentType } from "react";
import { browserRoutes } from "@/constants/browserRoutes";

/**
 * Route configuration type
 */
export interface RouteConfig {
  key: string;
  path: string;
  title: string;
  component: ComponentType<Record<string, unknown>>;
  showInNav?: boolean;
  icon?: string;
}

/**
 * Lazy load pages with proper module resolution
 * Using dynamic imports for code splitting
 */
const HomePage = lazy(() =>
  import("@/features/home").then((m) => ({ default: m.HomePage }))
);

const DestinationsPage = lazy(() =>
  import("@/features/destinations").then((m) => ({
    default: m.DestinationsPage,
  }))
);

const ContactPage = lazy(() =>
  import("@/features/contact").then((m) => ({ default: m.ContactPage }))
);

const PrivacyPage = lazy(() =>
  import("@/features/privacy").then((m) => ({ default: m.PrivacyPage }))
);

const TermsPage = lazy(() =>
  import("@/features/terms").then((m) => ({ default: m.TermsPage }))
);

const DivinePlacesPage = lazy(() =>
  import("@/features/divine-places").then((m) => ({
    default: m.DivinePlacesPage,
  }))
);

const TempleDetailsPage = lazy(() =>
  import("@/features/temple-details").then((m) => ({
    default: m.TempleDetailsPage,
  }))
);

const NotFoundPage = lazy(() =>
  import("@/features/not-found").then((m) => ({ default: m.NotFoundPage }))
);

/**
 * Main navigation routes configuration
 */
export const appRoutes: RouteConfig[] = [
  {
    key: "home",
    path: browserRoutes.home,
    title: "Home",
    component: HomePage,
    showInNav: true,
  },
  {
    key: "destinations",
    path: browserRoutes.destinations,
    title: "Destinations",
    component: DestinationsPage,
    showInNav: true,
  },
  {
    key: "destination-state",
    path: browserRoutes.destinationState,
    title: "State",
    component: DestinationsPage,
    showInNav: false,
  },
  {
    key: "destination-district",
    path: browserRoutes.destinationDistrict,
    title: "District",
    component: DestinationsPage,
    showInNav: false,
  },
  {
    key: "temple-details",
    path: browserRoutes.templeDetails,
    title: "Temple Details",
    component: TempleDetailsPage,
    showInNav: false,
  },
  {
    key: "divine-place-temple",
    path: browserRoutes.divinePlaceTemple,
    title: "Divine Place Temple",
    component: TempleDetailsPage,
    showInNav: false,
  },
  {
    key: "divine-place-deity",
    path: browserRoutes.divinePlaceDeity,
    title: "Divine Place Deity",
    component: DivinePlacesPage,
    showInNav: false,
  },
  {
    key: "divine-places",
    path: browserRoutes.divinePlaces,
    title: "Divine Places",
    component: DivinePlacesPage,
    showInNav: true,
  },
  {
    key: "contact",
    path: browserRoutes.contact,
    title: "Contact",
    component: ContactPage,
    showInNav: true,
  },
  {
    key: "privacy",
    path: browserRoutes.privacy,
    title: "Privacy Policy",
    component: PrivacyPage,
    showInNav: false,
  },
  {
    key: "terms",
    path: browserRoutes.terms,
    title: "Terms of Service",
    component: TermsPage,
    showInNav: false,
  },
];

/**
 * Not found route (catch-all)
 */
export const notFoundRoute: RouteConfig = {
  key: "not-found",
  path: browserRoutes.notFound,
  title: "Page Not Found",
  component: NotFoundPage,
  showInNav: false,
};

/**
 * Prefetch route components for better UX
 * Call this on hover or when idle to preload routes
 */
export const prefetchRoute = (routeKey: string): void => {
  const route = appRoutes.find((r) => r.key === routeKey);
  if (route) {
    // Trigger the lazy import to start loading
    switch (routeKey) {
      case "home":
        import("@/features/home");
        break;
      case "destinations":
        import("@/features/destinations");
        break;
      case "divine-places":
        import("@/features/divine-places");
        break;
      case "temple-details":
        import("@/features/temple-details");
        break;
      case "contact":
        import("@/features/contact");
        break;
      case "privacy":
        import("@/features/privacy");
        break;
      case "terms":
        import("@/features/terms");
        break;
    }
  }
};

/**
 * Prefetch all routes during idle time
 */
export const prefetchAllRoutes = (): void => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      appRoutes.forEach((route) => prefetchRoute(route.key));
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      appRoutes.forEach((route) => prefetchRoute(route.key));
    }, 2000);
  }
};

/**
 * Get navigation routes (routes that should appear in nav)
 */
export const getNavRoutes = (): RouteConfig[] => {
  return appRoutes.filter((route) => route.showInNav);
};
