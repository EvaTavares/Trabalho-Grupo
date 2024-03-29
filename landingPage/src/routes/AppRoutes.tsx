import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../config/layout/DefaultLayout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Products from '../pages/Products';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout component={Home} />} />
        <Route
          path="/products"
          element={<DefaultLayout component={Products} />}
        />
        <Route
          path="/contact"
          element={<DefaultLayout component={Contact} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
