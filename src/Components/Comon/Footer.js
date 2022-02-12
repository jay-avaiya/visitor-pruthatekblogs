import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'
function Footer(props) {
    return (
        <>
            <hr />
            <div className="footer">
                <h1 className="company-logo">LOGO</h1>
                <div className="About-links">
                    <h2 className="footer-links-title">ABOUT</h2>
                    <a href="/">About Company</a>
                    <a href="/">Newsletter</a>
                    <a href="/">Sitemap</a>
                    <a href="/">Carrers</a>
                    <a href="/">Help Center</a>
                    <a href="/">Licensing</a>
                </div>
                <div className="policy">
                    <h2 className="footer-links-title">POLICIES</h2>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Term of Use</a>
                    <a href="/">Cookie Settings</a>
                    <a href="/">Do Not Sell My Information</a>
                </div>
                <div className="social-media">
                    <h2 className="footer-links-title">FOLLOW</h2>
                    <div className="social-media-icons">
                        <FaFacebookF className="fa" title="visit our Facebook Page" />
                        <FaInstagram className="fa insta" title="visit our Instagram Page" />
                        <FaLinkedin className="fa" title="visit our LinkedIn Page" />
                        <FaTwitter className="fa" title="visit our Twitter Page" />
                        <FaYoutube className="fa ytb" title="visit our Youtube Page" />
                    </div>
                    <p className="rights">&copy; 2022 PruthaTek . All rights reserved .</p>
                </div>
            </div>
        </>
    );
}

export default Footer;