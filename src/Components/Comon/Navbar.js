import React, { useEffect } from 'react';
import './NAvbar.css'
function Navbar(props) {
    useEffect(() => {
        window.scroll(() => {
            if (window.screenTop >= 300) {
                document.querySelector(".navi").classList.toggle(".stick-it")
            }
        })
    })
    return (
        <>
            <h2 className="navi">Navbar</h2>
        </>
    );
}

export default Navbar;