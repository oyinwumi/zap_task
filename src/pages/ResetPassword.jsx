import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router';
import ResetPasswordModal from './ResetPasswordModal';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPassword , setShowPassword] = useState(false);


  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();

       if(newPassword && confirmNewPassword){
        navigate("/login")
       }
       setShowModal(!showModal)
      };

      const toggle = () =>{
        setShowPassword(!showPassword)
      }

    return (
    <div className=' md:bg-blue-900 w-screen h-screen md:py-28 relative z-0'>
       {showModal && <ResetPasswordModal/>}
       <div className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center mt-7 mb-4 text-xl font-bold'>Reset Password</h1>
        <p className='mb-7 text-center text-sm '>Your password should be at least 9 characters of lower case and upper case.</p>
        <form action='' onSubmit={handleSubmit}  className='items-center p-4'>
          <input type={showPassword?"text":"password"} placeholder='Enter new password' required
            className=' relative caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none ' 
            onChange={(e) => setNewPassword(e.target.value)}

          /> <AiOutlineEye onClick={toggle} className='relative bottom-12 right-4 float-right '/><br />
          <input type={showPassword?"text":"password"} placeholder='Confirm new password' required
            className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none lowercase '
            onChange={(e) => setConfirmNewPassword(e.target.value)}

            /> <AiOutlineEye onClick={toggle} className='relative bottom-12 right-4 float-right '/><br />
          <input type="submit" value="Reset password" 
           className=' cursor-pointer mt-1 mb-4 border border-blue-100 bg-blue-900 text-center text-white rounded-lg w-full p-3 outline-none hover:opacity-50'
          
           />
      </form>
        </div>
   
    </div>
  )
}

export default ResetPassword;