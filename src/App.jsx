import React from 'react';
import { BrowserRouter, Routes, Route,    } from 'react-router-dom';

 

import Home from './pages/Home';
import Stadt from './pages/Stadt';
import Berlin from './pages/Berlin'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stadt" element={<Stadt />} />
          <Route path="/berlin" element = {<Berlin />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
