import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/system/home/page";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import SigIn from "./pages/system/sigin/page";

export function AnimatesRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/system/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}
export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AnimatesRoutes />
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}
