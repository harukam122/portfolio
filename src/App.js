import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Redesign from "./pages/Redesign";
import JamzFindz from "./pages/JamzFindz";
import Personas from "./pages/Personas";

// import About from "./pages/About";
// import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="redesign" element={<Redesign />} />
          <Route path="jamz-findz" element={<JamzFindz />} />
          <Route path="personas" element={<Personas />} />

          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;