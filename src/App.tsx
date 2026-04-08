import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { CursorGlow } from "./components/ui/CursorGlow";

function App() {
  return (
    <div className="relative bg-[#0B0F19] text-white">
      <CursorGlow />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;