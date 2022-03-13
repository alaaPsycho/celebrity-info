import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos  from 'aos'
import 'aos/dist/aos.css'
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about';
import Faq from './pages/faq';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/services' element={<Services />}/>

      </Routes>
     
     
      </Router>
    </div>
  );
}

export default App;
