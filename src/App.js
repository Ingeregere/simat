import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbars from './Component/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Component/Footer'
import HotelPage from './Pages/Hotel';
import Tourismes from './Pages/Tourismes';
import Historique from './Pages/Historiques';
import ReservesNaturel from './Pages/ReservesNaturels';
import Monument from './Pages/Monument';
import EauxThermales from './Pages/EauxThermales';
function App() {
  return (
    <>
        <Router>
          <Navbars />
          <Routes>
              <Route path='/' exact element={<HomePage />} /> 
              <Route path='/hotel' exact element={<HotelPage />} /> 
              <Route path='/lieux-touristiques' exact element={<Tourismes />} /> 
              <Route path='/historiques' exact element={<Historique />} /> 
              <Route path='/reserves-naturels' exact element={<ReservesNaturel />} /> 
              <Route path='/monuments' exact element={<Monument />} /> 
              <Route path='/eaux-thermales' exact element={<EauxThermales />} /> 


          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
