import Intro from '../components/Intro';
import Projects from '../components/Projects';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App bg-white min-h-screen">
    <main className="body-text">
      <Intro />
      <Projects />
    </main>
    </div>
  );
}
  
export default Home;