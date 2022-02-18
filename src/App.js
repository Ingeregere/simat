import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbars from './Component/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Component/Footer'
import HotelPage from './Pages/Hotel';
function App() {
  return (
    <>
        <Router>
          <Navbars />
          <Routes>
          <Route path='/' exact element={<HomePage />} /> 
          <Route path='/hotel' exact element={<HotelPage />} /> 

          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
