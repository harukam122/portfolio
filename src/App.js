import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App bg-white min-h-screen">
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
    </main>
    </div>
  );
}

export default App;
