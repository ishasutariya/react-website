// src/components/Navbar.js
import React from 'react';
import '../../style/navbar.css';
import logo from '../../images/logo.webp';
import shop_image from '../../images/shop_image.avif';
import shop_image1 from '../../images/shop_image1.avif';

function Navbar() {
    return (
        <div>
            <nav>
                <div className='wrapper'>
                    <div className='logo'><a href='#'><img src={logo} alt="logo" /></a></div>
                    <ul className='nav-link'>
                        <li>
                            <a href='#' className='menu'>Shop</a>
                            <div className='mega-box'>
                                <div className='content'>
                                    <div className='rows'>
                                        <header>Jewelry</header>
                                        <ul className='mega-link'>
                                            <li><a href='#' className='menu'>Necklaces</a></li>
                                            <li><a href='#' className='menu'>Earrings</a></li>
                                            <li><a href='#' className='menu'>Rings</a></li>
                                            <li><a href='#' className='menu'>Bracelets</a></li>
                                            <li><a href='#' className='menu'>Anklets</a></li>
                                        </ul>
                                    </div>
                                    <div className='rows'>
                                        <header>Accessories</header>
                                        <ul className='mega-link'>
                                            <li><a href='#' className='menu'>Necklaces</a></li>
                                            <li><a href='#' className='menu'>Earrings</a></li>
                                            <li><a href='#' className='menu'>Rings</a></li>
                                            <li><a href='#' className='menu'>Bracelets</a></li>
                                            <li><a href='#' className='menu'>Anklets</a></li>
                                        </ul>
                                    </div>
                                    <div className='image-section'>
                                        <div className='rows'>
                                            <div className='mega-link-image'>
                                                <img src={shop_image} className="shop_image" />
                                                <p><a href='#'>PERSONALIZE YOUR JEWELRY</a></p>
                                                <p><a href='#'>Shop Now!</a></p>
                                            </div>
                                        </div>
                                        <div className='rows'>
                                            <div className='mega-link-image'>
                                                <img src={shop_image1} className="shop_image1" />
                                                <p><a href='#'>LOVE BANDS BY BLINGLANE</a></p>
                                                <p><a href='#'>Shop Now!</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href='#' className='menu'>Collections</a>
                            <ul className='drop-menu'>
                                <li><a href='#' className='menu'>Best Sellers</a></li>
                                <li><a href='#' className='menu'>Express Delivery</a></li>
                                <li><a href='#' className='menu'>Minimal Bling</a></li>
                                <li><a href='#' className='menu'>Elegant Bling</a></li>
                                <li><a href='#' className='menu'>Personalize Your Jewelry</a></li>
                                <li><a href='#' className='menu'>Love Bands</a></li>
                                <li><a href='#' className='menu'>Cartilage Piercing</a></li>
                                <li><a href='#' className='menu'>Florals</a></li>
                                <li><a href='#' className='menu'>Butterfly Bling</a></li>
                                <li><a href='#' className='menu'>LGBTQ Pride</a></li>
                                <li><a href='#' className='menu'>Rose Gold</a></li>
                                <li><a href='#' className='menu'>Ear Huggies</a></li>
                            </ul>
                        </li>
                        <li><a href='#'className='menu'>Express Delivery</a></li>
                        <li><a href='#'className='menu'>Personalize</a></li>
                        <li><a href='#'className='menu'>New Arrivals</a></li>
                        <li>
                            <a href='#' className='menu'>Information</a>
                            <ul className='drop-menu'>
                                <li><a href='#' className='menu'>Jewellery Blog</a></li>
                                <li><a href='#' className='menu'>Lookbook</a></li>
                                <li><a href='#' className='menu'>Influencer Program</a></li>
                                <li><a href='#' className='menu'>Check Order Status</a></li>
                                <li><a href='#' className='menu'>Return Or Exchange Order</a></li>
                                <li><a href='#' className='menu'>Jewellery Care & Packaging</a></li>
                                <li><a href='#' className='menu'>Shipping, Returns & Exchanges</a></li>
                                <li><a href='#' className='menu'>Contact Us</a></li>
                                <li><a href='#' className='menu'>About Us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="icons">
                        <a href="#search" className="icon-link"><i className="fas fa-search"></i></a>
                        <a href="#account" className="icon-link"><i className="fas fa-user"></i></a>
                        <a href="#cart" className="icon-link"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
