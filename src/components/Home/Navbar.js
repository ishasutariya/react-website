import React, { useContext } from 'react';
import '../../style/navbar.css';
import logo from '../../images/logo.webp';
import shop_image from '../../images/shop_image.avif';
import shop_image1 from '../../images/shop_image1.avif';
import { CartContext } from '../CartContext/ContextProvider';

function Navbar() {
    const { cart } = useContext(CartContext);
    return (
        <div>
            <nav>
                <div className='wrapper'>


                    <div className='logo'><a href='/'><img src={logo} alt="logo" /></a></div>
                    <input type='radio' name='slide' id="menu-btn" />
                    <input type='radio' name='slide' id="cancel-btn" />
                    <label for="menu-btn" className='btn menu-btn' ><i class="fa-solid fa-list"></i></label>
                    <ul className='nav-link'>
                        <label for="cancel-btn" className='btn cancel-btn' ><i class="fa-solid fa-xmark"></i></label>
                        <li>
                            <a href='/shop' className='menu' id='desktop-item'>Shop</a>
                            <input type='checkbox' id='showmega' />
                            <label for="showmega" className='mobile-item' >Shop</label>
                            <div className='mega-box'>
                                <div className='content'>
                                    <div className='rows' id='shopmenu'>
                                        <header>Jewelry</header>
                                        <ul className='mega-link'>
                                            <li><a href='/necklaces' className='menu'>Necklaces</a></li>
                                            <li><a href='/earrings' className='menu'>Earrings</a></li>
                                            <li><a href='/bracelets' className='menu'>Bracelets</a></li>
                                            <li><a href='/rings' className='menu'>Rings</a></li>
                                            <li><a href='/anklets' className='menu'>Anklets</a></li>
                                        </ul>
                                    </div>
                                    <div className='rows'>
                                        <header>Accessories</header>
                                        <ul className='mega-link'>
                                            <li><a href='/BeltBuckles' className='menu'>Belt Buckles</a></li>
                                            <li><a href='/Brooches' className='menu'>Brooches</a></li>
                                            <li><a href='/Cartilage' className='menu'>Cartilage</a></li>
                                        </ul>
                                    </div>
                                    <div className='image-section'>
                                        <div className='rows'>
                                            <div className='mega-link-image'>
                                                <a href='/Personalizedhome'>
                                                    <img src={shop_image} className="shop_image" alt="Shop Image" />
                                                    <p><a href='#'>PERSONALIZE YOUR JEWELRY</a></p>
                                                    <p><a href='#'>Shop Now!</a></p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='rows'>
                                            <div className='mega-link-image'>
                                                <img src={shop_image1} className="shop_image1" alt="Shop Image" />
                                                <p><a href='#'>LOVE BANDS BY BLINGLANE</a></p>
                                                <p><a href='#'>Shop Now!</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href='/collections' className='menu' id='desktop-item'>Collections</a>
                            <input type='checkbox' id="showdrop" />
                            <label for='showdrop' className="mobile-item" >collections </label>
                            <ul className='drop-menu'>
                                <li><a href='/expresshome' className='menu'>Best Sellers</a></li>
                                <li><a href='/expresshome' className='menu'>Express Delivery</a></li>
                                <li><a href='/Minimal' className='menu'>Minimal Bling</a></li>
                                <li><a href='/Elegant' className='menu'>Elegant Bling</a></li>
                                <li><a href='/Personalizedhome' className='menu'>Personalize Your Jewelry</a></li>
                                <li><a href='/Lovedands' className='menu'>Love Bands</a></li>
                                <li><a href='/Cartilage' className='menu'>Cartilage Piercing</a></li>
                                <li><a href='/Flower' className='menu'>Florals</a></li>
                                <li><a href='/Butterfly' className='menu'>Butterfly Bling</a></li>
                                <li><a href='#' className='menu'>LGBTQ Pride</a></li>
                                <li><a href='#' className='menu'>Rose Gold</a></li>
                                <li><a href='/earrings' className='menu'>Ear Huggies</a></li>
                            </ul>
                        </li>
                        <li><a href='/expresshome' className='menu'>Express Delivery</a></li>
                        <li><a href='/Personalizedhome' className='menu'>Personalize</a></li>
                        <li><a href='/Newarrivals' className='menu'>New Arrivals</a></li>
                        <li>
                            <a href='/Informationhome' className='menu' id='desktop-item'>Information</a>
                            <input type='checkbox' id="showdrop" />
                            <label for='showdrop' className="mobile-item" >Information </label>
                            <ul className='drop-menu'>
                                <li><a href='/Jewelryblog' className='menu'>Jewellery Blog</a></li>
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
                        <a href="/cart" className="icon-link"><i className="fas fa-shopping-cart"></i></a>{cart.length}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
