import { Suspense, ReactNode, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes, notFoundRoute, prefetchAllRoutes } from "./navigation";
import { RouteErrorBoundary } from "@/shared/components/performance";
import {
  TopLoader,
  PageLoader,
  ScrollToHash,
} from "@/shared/components/common";

/**
 * Loading fallback component for lazy-loaded routes
 * Shows a top progress bar and optional full-page loader
 */
const RouteLoadingFallback = () => (
  <>
    <TopLoader />
    <PageLoader />
  </>
);

/**
 * Route wrapper with error boundary and suspense
 * Provides consistent error handling and loading states for all routes
 */
interface RouteWrapperProps {
  component?: React.ComponentType<Record<string, unknown>>;
  children?: ReactNode;
}

const RouteWrapper = ({
  component: Component,
  children,
}: RouteWrapperProps) => (
  <RouteErrorBoundary>
    <Suspense fallback={<RouteLoadingFallback />}>
      {Component ? <Component /> : children}
    </Suspense>
  </RouteErrorBoundary>
);

/**
 * Main application router component
 * Features:
 * - Lazy loading for all page components
 * - Error boundaries for graceful error handling
 * - Suspense for loading states
 * - Route prefetching for better UX
 */
export const AppRouter = () => {
  // Prefetch all routes during idle time for faster navigation
  useEffect(() => {
    prefetchAllRoutes();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Dynamic routes from configuration */}
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<RouteWrapper component={route.component} />}
          />
        ))}

        {/* Catch-all 404 route */}
        <Route
          path={notFoundRoute.path}
          element={<RouteWrapper component={notFoundRoute.component} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
