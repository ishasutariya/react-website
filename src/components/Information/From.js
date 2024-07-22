import React from "react";
import '../../style/from.css'
function From() {
    return (
        <div className="container">
            <div className="row full_section">
                <div className="col-12 col-lg-8 from">
                    <div className="from_title">
                        <h1>Namaste! Get in touch with us</h1>
                    </div>
                    <div className="from_form">
                        <div>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <input type="number" placeholder="Phone number" />
                        </div>
                        <div>
                            <textarea placeholder="Comment"></textarea>
                        </div>

                        <div className="from_btn">
                            <div className="btn">SEND MESSAGE</div>
                        </div>
                        <div className="from_description">
                            <div>
                                <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 form_data">
                    <div>
                        <h6>Email</h6>
                        <p>care@blinglane.com</p>
                    </div>
                    <div>
                        <h6>Phone</h6>
                        <p>96500-BLING (25464)</p>
                    </div>
                    <div>
                        <h6>Messager</h6>
                        <p>m.me/blinglane</p>
                    </div>
                    <div>
                        <h6>Bling Fashions Private Limited</h6>
                        <p>2127-28/58 3rd Floor Gurudwara Road Karol Bagh New Delhi 110005 Delhi INDIA. Working Hours: Mon - Fri, 10:00am - 18:00pm.</p>
                    </div>
                    <div>
                        <h6>Follow Us</h6>
                        <div className="social_icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="location">
                <div><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=blinglane%20%202127-28/58%203rd%20Floor%20Gurudwara%20Road%20Karol%20Bagh%20New%20Delhi%20110005%20Delhi%20INDIA+(blinglane%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
            </div>
        </div>
    )
}
export default From;