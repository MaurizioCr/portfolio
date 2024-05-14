import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Blocco from "./Component/Blocco"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import MyNavbar from "./Component/MyNavbar";
function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
      <Route element={<Blocco/>}path="/blocco"/>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
