import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Redesign from "./pages/Redesign";
import JamzFindz from "./pages/JamzFindz";
import Personas from "./pages/Personas";
import Hello from "./pages/Hello";
import NoPage from "./pages/NoPage";
import Navbar from './components/Navbar';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home scrollToTop={scrollToTop} />} />
          <Route path="/redesign" element={<Redesign scrollToTop={scrollToTop} />} />
          <Route path="/jamz-findz" element={<JamzFindz scrollToTop={scrollToTop} />} />
          <Route path="/personas" element={<Personas scrollToTop={scrollToTop} />} />
          <Route path="/hello" element={<Hello scrollToTop={scrollToTop} />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;