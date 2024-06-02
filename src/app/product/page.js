"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ProductsPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Products Page</h1>
            <div className="h-screen bg-white"></div>
            <Footer />
        </div>
    );
};

export default ProductsPage;