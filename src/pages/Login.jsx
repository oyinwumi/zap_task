import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";


const Login = () => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword , setShowPassword] = useState(false);

  const navigate = useNavigate()


  const handleSubmit = (e) =>{
    e.preventDefault();
   if( email && password){
      navigate("/dashboard")
   }
  };
  const toggle = () =>{
    setShowPassword(!showPassword)
  }

  return (
    <div className=' md:bg-blue-900 w-screen h-screen md:py-28'>
       <form action="" onSubmit={handleSubmit} className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center my-7 text-xl font-bold'>Welcome Back</h1>
        <form action="" className='items-center p-4'>
          <label htmlFor="" className='text-lg'>Email</label><br /> 
          <input type="emal"  placeholder='Enter your email'
            className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none lowercase '
            onChange={(e) => setEmail(e.target.value)}

            /><br />
          <label htmlFor="" className='text-lg'>Password</label><br /> 
          <input type={showPassword?"text":"password"}  placeholder='Enter your Password' 
           className='caret-blue-400  mt-1 mb-2 border border-blue-100  rounded-lg w-full p-3 outline-none ' 
           onChange={(e) => setPassword(e.target.value)}

            /> <AiOutlineEye   onClick={toggle} className='relative bottom-10 right-4 float-right '/><br />
          <Link to="/forgotpassword" className='float-right mb-4 text-blue-900'>Forgot password?</Link>
          <input type="submit" value="Login"  className=' cursor-pointer mt-1 mb-4 border border-blue-100 bg-blue-900 text-center text-white rounded-lg w-full p-3 outline-none hover:opacity-50' />
          <p className='text-center'>Don't have an account? <Link to="/signup" className='text-blue-900 ml-1'>Sign Up</Link></p>
      </form>
        </form>
   
    </div>
  )
}

export default Login