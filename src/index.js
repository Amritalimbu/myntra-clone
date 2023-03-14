import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routers, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Homeliving from './Homeliving';
import Beauty from './Beauty';
import Navbar from './Navbar';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>

  <Routers>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/Men" element={<Men/>}/>
      <Route exact path="Women" element={<Women/>}/>
      <Route exact path="/Kids" element={<Kids/>}/>
      <Route exact path="/Homeliving" element={<Homeliving/>}/>
      <Route exact path="/Beauty" element={<Beauty/>}/>
    </Routes>
  </Routers>

  <Footer/>
  </>
);