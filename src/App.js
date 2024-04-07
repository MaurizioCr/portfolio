import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Blocco from "./Component/Blocco"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
