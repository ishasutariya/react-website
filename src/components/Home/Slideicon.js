import React from 'react';
import '../../style/slideicon.css';
import { FaFacebookF, FaPinterestP, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SlidingIconLine = () => {
    return (
        <div className="sliding-icon-line">
            <div className="social-icons">
                <FaFacebookF className="icon" />
                <FaPinterestP className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedinIn className="icon" />
                <FaYoutube className="icon" />
            </div>
            <div className="newsletter-text">
                <h5>NEWSLETTER</h5>
            </div>
        </div>
    );
};

export default SlidingIconLine;
