import './App.css';
import { Route, Routes} from 'react-router-dom';
import Destination from './pages/destinos/Destination';
import Home from './pages/Home/Home';
import  Nav  from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
import Detail from './pages/detail/Detail';
function App() {
  return (
    <>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/detail/:Id' element={<Detail/>}/>
        </Routes>
        {location.pathname !== "/destination" && <Footer/>}
    </>
  );
}

export default App;
