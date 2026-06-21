import Header from "./components/Header";
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Divider = () => (
  <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
);

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Main />
      <Divider />
      <Aboutme />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Activities />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
