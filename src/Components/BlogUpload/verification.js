import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './verification.css'
import { MdOutlineCancel } from 'react-icons/md'

function Verification(props) {
    const disappear = () =>{
        document.querySelector(".otp-sent-msg").classList.add("display-none")
    }
    return (
        <>
            <Navbar />
            <div className="otp-sent-msg">
                <p className="otp-sent"><span>Message:</span> OTP Sent On your Mail id</p>
                <MdOutlineCancel onClick={disappear}/>
            </div>
            <div className="otp-div">
                <p>Enter OTP</p>
                <input type="password" placeholder="Enter OTP here" />
            </div>
            <Footer />
        </>
    );
}

export default Verification;