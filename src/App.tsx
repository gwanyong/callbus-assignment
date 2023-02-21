import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { RefundForm } from './pages/index';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RefundForm />} />
          <Route path="/info/:step" element={<RefundForm />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
