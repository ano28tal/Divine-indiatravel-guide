export * from "./components";
export * from "./pages";
export * from "./hooks";

// Re-export types explicitly so the `TempleDetails` interface does not collide
// with the `TempleDetails` component exported from "./components".
export type {
  TempleImage,
  Address,
  Coordinates,
  RecommendedPlace,
  TempleDetails,
  TempleDetailsState,
} from "./types/templeDetails";
