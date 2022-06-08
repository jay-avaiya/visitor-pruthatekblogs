import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer(props) {
    return (
        <>
            <hr />
            <div className="footer">
                <Link to="/" >
                    <img src="/Logo.png" alt="Pruthatek-logo" className="pruthatek-blog-logo" />
                </Link>
                <div className="about-policies-flex-cont" >
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
                </div>
                <div className="social-media">
                    <h2 className="footer-links-title">FOLLOW US</h2>
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/pruthatek/" rel="noreferrer noopener" target="_blank" > <FaFacebookF className="fa" title="visit our Facebook Page" /></a>
                        <a href="https://www.instagram.com/pruthatek/" rel="noreferrer noopener" target="_blank" > <FaInstagram className="fa insta" title="visit our Instagram Page" /></a>
                        <a href="https://in.linkedin.com/company/pruthatek" rel="noreferrer noopener" target="_blank" > <FaLinkedin className="fa" title="visit our LinkedIn Page" /></a>
                        <a href="https://twitter.com/pruthatek" rel="noreferrer noopener" target="_blank" > <FaTwitter className="fa" title="visit our Twitter Page" /></a>
                        <a href="https://www.facebook.com/pruthatek/" rel="noreferrer noopener" target="_blank" > <FaYoutube className="fa ytb" title="visit our Youtube Page" /></a>
                    </div>
                    <p className="rights">&copy; 2022 PruthaTek . All rights reserved .</p>
                </div>
            </div>
        </>
    );
}

export default Footer;