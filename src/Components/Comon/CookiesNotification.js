import React, { useState } from 'react';
import './cookie.css'
function CookiesNotification(props) {
    const [acceptedCookie, setacceptedCookie] = useState(false)
    const handleDisplay = (e) => {
        const cookieDiv = document.querySelector(".cookie");
        cookieDiv.classList.add("display-none");
        if (e.target.value === "Accepted")
        {
            setacceptedCookie(true)    
        }
        else
        {
            setacceptedCookie(false)
        }
    }
    console.log(acceptedCookie);
    return (
        <div className="cookie">
            <div className="cookie-flex" >
                <img src="/cookie.png" alt="cookie" />
                <p>We use cookies to make your experience on this website better. This includes cookies for website functionality to manage our commercial objectives and optimization.</p>
            </div>
            <button value="notAccepted" className="cookie-btn accept-btn" onClick={handleDisplay} >Do not accept</button>
            <button value="Accepted" className="cookie-btn not-accept-btn" onClick={handleDisplay} >Accept</button>
        </div>
    );
}

export default CookiesNotification;