import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { CursorGlow } from "./components/ui/CursorGlow";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "./components/ui/PageWrapper";


function App() {
  return (
    <AnimatePresence mode="wait">
      <PageWrapper>
        <div className="relative bg-[#0B0F19] text-white">
          <CursorGlow />
          <Navbar />
          <Home />
          <Footer />
        </div>
      </PageWrapper>
    </AnimatePresence>
  );
}

export default App;