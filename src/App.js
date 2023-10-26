import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Experience, NoPage, Redesign, JamzFindz, Personas, Hello, SpeechMe, Syntax, Shell, Ghiblify, IP } from "./pages/pages";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/redesign" element={<Redesign/>} />
          <Route path="/jamz-findz" element={<JamzFindz/>} />
          <Route path="/personas" element={<Personas/>} />
          <Route path="/hello" element={<Hello/>} />
          <Route path="/speech-me" element={<SpeechMe/>} />
          <Route path="/syntax" element={<Syntax/>} />
          <Route path="/shell" element={<Shell/>} />
          <Route path="/ghiblify" element={<Ghiblify/>} />
          <Route path="/ip" element={<IP/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;