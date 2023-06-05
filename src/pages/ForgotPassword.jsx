import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email , setEmail] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
       setEmail(email);
       if(email){
        navigate("/resetpassword")
       }
  };

  return (
    <div className=' bg-blue-900 w-screen h-screen md:py-28'>
       <div className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center mt-7 mb-4 text-xl font-bold'>Forgot Password</h1>
        <p className='mb-7 text-center text-sm '>Enter the email registered with your account </p>
          <form action="" onSubmit={handleSubmit} className='items-center p-4'>
            <input type="email"  placeholder='Enter your email'  
            className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none  '
            onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input type="submit" value="Continue"  className=' cursor-pointer mt-1 mb-4 border border-blue-100 bg-blue-900 text-center text-white rounded-lg w-full p-3 outline-none hover:opacity-50' />
            <p className='text-center'>Don't have an account? <Link to="/signup" className='text-blue-900 ml-1'>Sign Up</Link></p>
        </form>
        </div>
   
    </div>
  )
}

export default ForgotPassword;