import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Color from './pages/Product/components/Color/Color';
import Count from './pages/Product/components/Count/Count';
import Review from './pages/Product/components/Review/Review';
import Nav from './pages/components/Nav/Nav';

const Router = () => {
    return (
        <BrowserRouter>
                <Routes>                    
                    <Route path="/" element={<Introduce/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/productList" element={<ProductList/>} />
                    <Route path="/color" element={<Color/>} />
                    <Route path="/count" element={<Count/>} />
                    <Route path="/review" element={<Review/>} />
                    <Route path="/nav" element={<Nav/>} />
                </Routes>
        </BrowserRouter>


    );
};

export default Router;