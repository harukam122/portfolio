import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App bg-white min-h-screen">
    <main className="text-gray-400 body-font">
      <Navbar />
      <About />
      <Projects />
    </main>
    </div>
  );
}

export default App;
