import './App.css';
import NavBar from './NavBar';
import { Route, Routes} from "react-router-dom";
import Visualization  from './components/Visualization';
import Home from './pages/Home';
import Hipotesis from './pages/Hipotesis';
import Footer from './footer/Footer';
import Conclusiones from './pages/Conclusiones';

function App() {
  return (
    <div className='Page-Container'>
      <div className='Container-wrap'>
        <NavBar />
        <div className='Container'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hipotesis" element={<Hipotesis />}/>
            <Route path="/visualizaciones" element={<Visualization />}/>
            <Route path="/conclusiones" element={<Conclusiones />}/>
          </Routes>
        </div>
      </div> 
      <Footer />
    </div>
  )
}

export default App;
