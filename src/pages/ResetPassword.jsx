import React from 'react';
import { AiOutlineEye } from "react-icons/ai";

const Resetpassword = () => {
  return (
    <div className=' bg-blue-900 w-screen h-screen md:py-28'>
       <div className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center mt-7 mb-4 text-xl font-bold'>Reset Password</h1>
        <p className='mb-7 text-center text-sm '>Your password should be at least 9 characters of lower case and upper case.</p>
        <div className='items-center p-4'>
          <input type="password"  placeholder='Enter new password'  className=' relative caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none lowercase '/> <AiOutlineEye className='relative bottom-12 right-4 float-right '/><br />
          <input type="password"  placeholder='Confirm new password'  className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none lowercase '/> <AiOutlineEye className='relative bottom-12 right-4 float-right '/><br />
          <input type="submit" value="Reset password"  className=' cursor-pointer mt-1 mb-4 border border-blue-100 bg-blue-900 text-center text-white rounded-lg w-full p-3 outline-none hover:opacity-50' />
      </div>
        </div>
   
    </div>
  )
}

export default Resetpassword;