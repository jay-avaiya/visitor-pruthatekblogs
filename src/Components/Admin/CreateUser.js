import React, { useState } from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import './CreateUser.css'

function CreateUser(props) {
    const [eyeIcon,seteyeIcon] = useState(true)
    const [eyeIconConfirm,seteyeIconConfirm] = useState(true)
    const visiblePass = (e) =>{
        console.log(e);
        const userPassword = document.querySelector("#password-user")
        const type = userPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        userPassword.setAttribute('type',type)
        seteyeIcon(!eyeIcon)
    }
    const visibleConfirmPass = (e) =>{
        console.log(e);
        const userconfPassword = document.querySelector("#confirm")
        const type = userconfPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        userconfPassword.setAttribute('type',type)
        seteyeIconConfirm(!eyeIcon)
    }
    return (
        <div>
            <Navbar />
            <div class="box">
                <h2>Enter Details</h2>
                <form action="">
                    <div class="input-box">
                        <input type="text" id="username" required />
                        <label for="username">Username</label>
                    </div>
                    <div class="input-box">
                        <input type="text" id="firstname" required />
                        <label for="firstname">FirstName</label>
                    </div>
                    <div class="input-box">
                        <input type="text" id="lastname" required />
                        <label for="lastname">LastName</label>
                    </div>
                    <div class="input-box">
                        <input type="email" id="email" required />
                        <label for="email">Email</label>
                    </div>
                    <div class="input-box">
                        <input type="password" id="password-user" required />
                        <label for="password-user">Password</label>
                        {eyeIcon ? <AiFillEye className="eye" onClick={visiblePass}/> : <AiFillEyeInvisible className="eye" onClick={visiblePass}/>  }
                    </div>
                    <div class="input-box">
                        <input type="password" id="confirm" required />
                        <label for="confirm">Confirm Password</label>
                        {eyeIconConfirm ? <AiFillEye className="eye" onClick={visibleConfirmPass}/> : <AiFillEyeInvisible className="eye" onClick={visibleConfirmPass}/>  }
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default CreateUser;