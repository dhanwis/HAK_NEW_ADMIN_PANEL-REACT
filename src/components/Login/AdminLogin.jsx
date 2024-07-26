import React, { useState } from 'react';
import './login.css';
import logo from './dilhak.png';
import axios from 'axios';
import { BASE_URL } from '../../pages/Baseurl';


//makes changes here from sreehari + shamal

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  var [username, setName] = useState('');
  var [password, setPassword] = useState('');
  var [usernameError, setNameError] = useState('');
  var [passwordError, setPasswordError] = useState('');

  console.log(username, password)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setName(value);
      setNameError(value.trim() === '' ? 'Username is Required' : '');
    }
    else if (name === 'password') {
      setPassword(value);
      setPasswordError(value.trim() === '' ? 'Password is Required' : value.length < 8 ? 'Password must have more than 8 characters' : '');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    let usernameError = '';
    let passwordError = '';
  
    if (username.trim() === '') {
      usernameError = 'Username is required';
    }
    if (password.trim() === '') {
      passwordError = 'Password is required';
    } else if (password.length < 8) {
      passwordError = 'Password must have more than 8 characters';
    }
  
    setNameError(usernameError);
    setPasswordError(passwordError);
  
    if (usernameError || passwordError) {
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await axios.post(`${BASE_URL}/auth/admin/login/`, { username, password });
  
      if (response.status === 200) {
        const user = response.data.user;
        sessionStorage.setItem('token', response.data.access);
  
        if (user.product_admin) {
          window.location.href = '/productadmin-dashboard';
        } else if (user.order_admin) {
          window.location.href = '/orderadmin-dashboard';
        } else if (user.sales_admin) {
          window.location.href = '/salesadmin-dashboard';
        } else {
          window.location.href = '/admin-dashboard';
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid username or password');
      } else {
        alert(error.response ? error.response.data : 'An error occurred');
      }
      console.log(error.response);
    } finally {
      setIsSubmitting(false); // Set isSubmitting back to false when submission is done
    }
  };
  


  return (
    <div className='login_body'>
      <div className='login_container'>
        <div className='login_top'></div>
        <div className='login_top2'></div>
        <div className='login_center'>
          <form onSubmit={handleSubmit}>
            <img className='login_image' src={logo} alt="logo" />
            {/* <h2>Welcome, Sign In</h2>  */}
            <div className='form-control login_input' style={{ marginTop: '10px', borderColor: usernameError ? 'red' : '' }}><i className='fa-solid fa-envelope icon' /><input className='form-control login_email' type="text" placeholder="Enter Your Email" name='username' onChange={handleInputChange} /></div>
            <div><label className='form-label' style={{ marginLeft: '10px', color: 'red' }}>{usernameError}</label></div>
            <div className='form-control login_input' style={{ marginTop: '10px', borderColor: passwordError ? 'red' : '' }}><i className='fa-solid fa-lock icon' /><input className='form-control login_password' id='password' type={showPassword ? "text" : "password"} placeholder="Enter Your Password" name='password' onChange={handleInputChange} /><button type='button' id="password_button" onClick={togglePassword}>{showPassword ? <i className='fa-solid fa-eye-slash' /> : <i className='fa-solid fa-eye' />}</button></div>
            <div><label className='form-label' style={{ marginLeft: '10px', color: 'red' }}>{passwordError}</label></div>
            <button className='login_submit' type='submit' disabled={isSubmitting}>
              {isSubmitting ? <>Logging in&nbsp;<i className="fas fa-spinner fa-spin"></i> </> : "Login"}
            </button>
          </form>
        </div>
        <div className='login_bottom'></div>
        <div className='login_bottom2'></div>
      </div>
    </div>
  )
}

export default AdminLogin