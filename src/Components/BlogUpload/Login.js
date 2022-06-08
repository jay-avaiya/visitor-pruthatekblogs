import React, { useState } from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './Login.css'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'

function Login(props) {
    const [eyeIcon,seteyeIcon] = useState(true)
    const visiblePass = (e) =>{
        console.log(e);
        const userPassword = document.querySelector("#password")
        const type = userPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        userPassword.setAttribute('type',type)
        seteyeIcon(!eyeIcon)
    }
    return (
        <>
            <Navbar />
            <div class="box">
                <h2>Login</h2>
                <form action="">
                    <div class="input-box">
                        <input type="text" id="username" autocomplete="off" required />
                        <label for="username">Username</label>
                    </div>
                    <div class="input-box">
                        <input type="password" autocomplete="off" id="password" required />
                        <label for="password">Password</label>
                        {eyeIcon ? <AiFillEye className="eye" onClick={visiblePass}/> : <AiFillEyeInvisible className="eye" onClick={visiblePass}/>  }
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;