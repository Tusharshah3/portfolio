import Header from "./components/Header";
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Main />
      <Aboutme />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
