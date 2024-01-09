import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Destination from './pages/destinos/Destination';
import Home from './pages/Home/Home';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route path='/destination' element={<Destination />} />
        <Route path='/Home'element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
