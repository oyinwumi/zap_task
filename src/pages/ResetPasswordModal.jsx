import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPasswordModal = () => {
  return (
    <div className='w-full  h-full bg-blue-300 opacity-75  fixed z-10 '>
      <div className='bg-white text-center  border border-blue-100 rounded-lg  lg:w-[432px]  md:w-[40%] w-[75%]  p-4 items-center mx-auto lg:mt-[8%] md:mt-[20%] mt-[25%] z-40 '>
        <div className=' mt-7 border border-green-500 font-light p-2 rounded-full w-8 h-8 mx-auto '>
          <FaCheck className='text-green-500'/>
        </div>

        <h3 className='text-xl text-black mt-7'>Success!</h3>
        <p className='mt-2 '>
          Your password has been changed successfully
        </p>
        <button className=' bg-blue-900 w-[86px] h-[42px] text-white text-base font-bold mt-6 rounded'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordModal