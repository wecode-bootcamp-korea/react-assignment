import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Common
import Nav from "./pages/components/Nav/Nav"

// Introduce
import Introduce from './pages/Introduce/Introduce';

// ProductList
import ProductList from './pages/ProductList/ProductList';

// Product
import Product from './pages/Product/Product';
import Color from './pages/Product/components/Color/Color';
import Review from './pages/Product/components/Review/Review';
import Count from './pages/Product/components/Count/Count';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        {/* Introduce */}
        <Route path="/" element={<Introduce />} />

         {/* ProductList */}
        <Route path="/productList" element={<ProductList />} />

         {/* Product */}
        <Route path="/product" element={<Product />} />
        <Route path="/color" element={<Color />} />
        <Route path="/review" element={<Review />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
 );
};

export default Router;