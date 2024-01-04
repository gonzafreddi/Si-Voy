import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Destination from './pages/destinos/Destination';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
