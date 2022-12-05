import About from '../components/Intro';
import Projects from '../components/Projects';

function Home() {
    return (
      <div className="App bg-white min-h-screen">
      <main className="body-text">
        <About />
        <Projects />
      </main>
      </div>
    );
}
  
export default Home;