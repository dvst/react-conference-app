// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          {/* Añadir más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;