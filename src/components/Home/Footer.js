import React from "react";
import '../../style/footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="footer_top_sectiomn">
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/13234727-c3de-45ce-a742-fa4c05a7a2ca?color=rgba(0,%200,%200,%201)" />
                    <p>Finest Quality</p>
                    <p>Finely crafted products</p>
                </div>
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/45e8bc81-3f8f-49c7-b28e-7acae34e5251?color=rgba(0,%200,%200,%201)" />
                    <p>Hypoallergenic</p>
                    <p>Non-allergic materials</p>
                </div>
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/c1760d5a-086f-4e21-b2db-71baf0260ca4?color=rgba(0,%200,%200,%201)" />
                    <p>Free Shipping</p>
                    <p>Premium packaging</p>
                </div>
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/ef93b489-21a9-4982-9b44-db51681dad19?color=rgba(0,%200,%200,%201)" />
                    <p>Gift Wrap Available</p>
                    <p>Free postcard</p>
                </div>
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/7c98e1ba-4317-496f-bd08-e7217d8a5ba4?color=rgba(0,%200,%200,%201)" />
                    <p>Latest Trends</p>
                    <p>To Your Doorstep</p>
                </div>
                <div className="footer_strat">
                    <img src="https://d2kmd27hg6le17.cloudfront.net/storefront_api/icons/99e95c15-a693-47c4-8ce1-02e7ee39983a?color=rgba(0,%200,%200,%201)" />
                    <p>SSL Secure</p>
                    <p>PCI DSS Compliant</p>
                </div>
            </div>
            <div>
                <div className="footer_center_part">
                    <div className="data">
                        <div className="detalis">
                            <ul>
                                <h4>COLLECTIONS</h4>
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">Express Delivery</a></li>
                                <li><a href="#">Minimal Jewellery</a></li>
                                <li><a href="#">Elegant Jewellery</a></li>
                                <li><a href="#">Floral Jewellery</a></li>
                                <li><a href="#">Love Bands Jewellery</a></li>
                                <li><a href="#">Personalized Jewellery</a></li>
                                <li><a href="#">Rose Gold Jewellery</a></li>
                                <li><a href="#">Cartilage Piercing Jewellery</a></li>
                                <li><a href="#">Butterfly Bling Jewellery</a></li>
                                <li><a href="#">Zodiac Jewellery</a></li>
                            </ul>
                        </div>
                        <div class="detalis">
                            <ul>
                                <h4>CATEGORIES</h4>
                                <li><a href="#">Silver Necklace</a> </li>
                                <li><a href="#">Silver Ring</a></li>
                                <li><a href="#">Silver Bracelet</a></li>
                                <li><a href="#">Silver Earrings</a></li>
                                <li><a href="#">Silver Anklet</a></li>
                                <li><a href="#">Gift Card</a></li>
                                <li><a href="#">Belt Buckles</a></li>
                                <li><a href="#">Brooches</a></li>
                            </ul>
                        </div>
                        <div class="detalis">
                            <ul>
                                <h4>POLICIES </h4>
                                <li><a href="#">Returns & Exchange Policy</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="detalis">
                            <ul>
                                <h4>INFORMATION</h4>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Check Order Status</a></li>
                                <li><a href="#">Return or Exchange Order</a></li>
                                <li><a href="#">Jewellery Blog</a></li>
                                <li><a href="#">LookBook</a></li>
                                <li><a href="#">Influencer Program</a></li>
                                <li><a href="#">Shipping, Returns & Exchanges</a></li>
                                <li><a href="#">Jewelry Care, Packaging & Gifts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="side_detalis">
                        <div>
                            <h4>SUBSCRIBE TO AWESOMENESS</h4>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter email here" />
                        </div>
                        <div>
                            <p>Join our social community & get special deals, offers, inspirations and new arrival notifications straight to your inbox.</p>
                            <p>Rest assured, We hate spam too!</p>
                        </div>
                        <div>
                            <h4>ABOUT BLINGLANE</h4>
                            <p>
                                There is that spark of luxurious elegance that most of the amazing ladies always aspire to experience. The kind of elegance that will make them comfortable about themselves but it is unfortunate that the dreary limitations of the luxury brand’s accessibility have forced them to keep it as far away as a dream rather than a joyous reality.</p>
                            <p>
                                Blinglane®, a direct to consumer digital first fashion brand based out at India & Canada, aims to democratize luxury fashion including premium quality fine jewelry, custom personalized jewellery, sterling silver jewellery & fashion accessories online at affordable prices for wonderful women worldwide, delivered at their doorstep with love & care.
                            </p>
                            <p>
                                No intermediaries and no wholesalers, so no excessive margins. It's just between you and us, and this is what allows us to offer you a premium quality product at a reasonable price. Welcome to the fashion of the 21st century.
                            </p>
                        </div>
                        <div>
                            <h4 className="follow">FOLLOW US</h4>
                        </div>
                        <div className="footer_icon_section">
                            <FaFacebookF className="icon" />
                            <FaPinterestP className="icon" />
                            <FaInstagram className="icon" />
                            <FaLinkedinIn className="icon" />
                            <FaYoutube className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_last_part">
                <div>
                    <p>
                        © 2014 - 2024, Blinglane ®. All rights reserved.
                    </p>
                    <p>
                        Building brand with ❤ in India & Canada
                    </p>
                    <p>
                        Bling Fashions Private Limited
                    </p>
                    <p>
                        96500-BLING (25464) | care@blinglane.com
                    </p>
                    <p>
                        BIS : HM/C-8590049325 | CIN: U74999DL2014PTC268955
                    </p>

                </div>
            </div>
        </footer>
    )
}
export default Footer;