import './App.css';
import { Route, Routes} from 'react-router-dom';
import Destination from './pages/destinos/Destination';
import  Nav  from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
        <Nav/>
        <Routes>
          <Route path='/destination' element={<Destination />} />
        </Routes>
        {location.pathname !== "/destination" && <Footer/>}
    </>
  );
}

export default App;
