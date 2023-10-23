import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Experience, NoPage, Redesign, JamzFindz, Personas, Hello, SpeechMe, Syntax, Shell, Ghiblify, IP } from "./pages/pages";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
          <Route path="/speech-me" element={<SpeechMe scrollToTop={scrollToTop} />} />
          <Route path="/syntax" element={<Syntax scrollToTop={scrollToTop} />} />
          <Route path="/shell" element={<Shell scrollToTop={scrollToTop} />} />
          <Route path="/ghiblify" element={<Ghiblify scrollToTop={scrollToTop} />} />
          <Route path="/ip" element={<IP scrollToTop={scrollToTop} />} />
          <Route path="/about" element={<About scrollToTop={scrollToTop} />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;