import { Toaster } from "@/shared/components/ui/toaster";
import { Toaster as Sonner } from "@/shared/components/ui/sonner";
import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";

const App = () => (
  <AppProviders>
    <Toaster />
    <Sonner />
    <AppRouter />
  </AppProviders>
);

export default App;
