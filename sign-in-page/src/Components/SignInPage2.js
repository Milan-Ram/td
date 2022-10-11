import React from 'react';
import heading from '../Images/iicHeading.png';
import logo from '../Images/iicLogo.png';
import '../Components/SIgnInPage.css';
function SignInPage() {
    
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <img className='TextLogo' src={heading} alt='Idea Innovation Cell' />
                    <img className='Logo' src={logo} alt='IIC logo.' />
                </div>
                <div className='main'>
                    <h2>Sign In</h2>
                   
                    <h3>Username/Email</h3>
                    <div className='Email InputField'>
                    <ion-icon name="person" className="icon"></ion-icon>
                    <input className='emailInput' name='email' type='email' placeholder='Your Email' />
                     </div>
                    <h3>Password</h3>
                     <div className='Password InputField'>
                     <ion-icon name="lock-closed" className='icon'></ion-icon>
                    <input className='passwordInput' id="passwordBox" name='password' type='password' placeholder='Your Password' />
                    <ion-icon name="eye-off" id="hidden" ></ion-icon>
                    </div>
                    <h4>forgot password ?</h4>
                    <button className='submitBtn'
                     type='submit' name='Submit'>Submit</button>

                    <h4>New User ? Sign Up</h4>
                
                </div>

            </div>
        </>
    )
}

export default SignInPage