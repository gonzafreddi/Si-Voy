import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Destination from './pages/destinos/Destination';
import  Nav  from './components/Navbar/Nav';
function App() {
  return (
    <>

    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
