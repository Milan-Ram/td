import React, { useState } from 'react';
import TextLogo from '../Images/iicHeading.png';
import ImgLogo from '../Images/iicLogo.png';
import '../Components/SignInPage.css';


function SignInPage() {

  const [FormValues, SetFormValues] = useState({ email: "", password: "" });
  const [FormErrors, SetFormErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;
    SetFormValues({ ...FormValues, [name]: value });
    console.log(FormValues);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    SetFormErrors(validate(FormValues));
  }
  const validate = (values) => {
    const errors = {};
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(values.email)){
      errors.email = "Invalid Email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }

  return (
    <>
      <section className='signInPage'>
        <div className='header'>
          <img className='TextLogo' src={TextLogo} alt="Idea Innovation Cell" />
          <img className='ImgLogo' src={ImgLogo} alt="Idea Innovation Cell" />
        </div>
        <div className='main'>
          <form>
            <p className='signInHeading'>Sign In </p>

            <label className='InputHeading'>Username</label>
            <div className='InputField'>
              <ion-icon name="person" className="icon"></ion-icon>
              <input className='EmailInput Input' type='email' name='email' placeholder="Your Email"
                autoComplete='off' value={FormValues.email} onChange={handleChange} />
            </div>
            <span>{FormErrors.email}</span>

            <label className='InputHeading'>Password</label>
            <div className='InputField'>
              <ion-icon name="lock-closed" className="icon" poin></ion-icon>
              <input className='PasswordInput Input' type='password' name='password' placeholder="Your Password"
                value={FormValues.password} onChange={handleChange} />
            </div>
            <span>{FormErrors.password}</span>

            <a href="/" className='heading-small'>Forgot password ?</a>
            <button className='SignInBtn' onClick={handleSubmit} >Sign In</button>
            <a href="/" className="heading-small">New User ?</a>
            <a href="/" className="heading-signUp">Sign Up</a>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignInPage