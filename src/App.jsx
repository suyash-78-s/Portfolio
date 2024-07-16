
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Contact/>
      
    </div>
  );
};

export default App;
