import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logistic from '../components/logistic-removebg-preview.png'


const LandingPage = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className=''>
         <nav className='bg-white flex justify-between h-[88px] border border-white items-center md:px-20 px-8'>
        <div className='flex md:flex-col'>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
          <div
            onClick={() => setOpen(!open)}
            className='text-violet-900 text-5xl cursor-pointer md:hidden absolute right-8 top-6 text-center'
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <div
          className={`md:flex px-4 md:text-center items-center  text-black md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-14 md:pt-10 pt-10
       lg:pb-0 lg:mb-12 md:pb-12 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${
         open ? 'top-20' : 'top-[-490px]'
       } `}
        >
          <Link to='/login'>
            <button className='border border-x-purple text-center py-3 px-4 w-[102px] h-[42px]  text-white text-sm rounded-lg bg-blue-900 hover:bg-purple mr-4 hover:text-white '>
              LOGIN
            </button>
          </Link>
          <Link to='/signup'>
            <button className='border border-x-purple text-center py-3 px-4 w-[102px] h-[42px] text-white text-sm rounded-lg bg-blue-900   hover:bg-purple hover:opacity-50'>
              SIGNUP
            </button>
          </Link>
        </div>
      </nav>
      <div className='bg-blue-100  flex  md:flex-row flex-col justify-between w-full p-20 '>
      <div className='md:w-1/2 w-full items-center my-auto font-bold'>
      <small className='text-[16px] mb-2'>Welcome to </small>
         <h1 className='text-5xl mb-6 '>Zap Logistic</h1>
         <p className='text-xl md:w-[550px] w-full mb-8'>Global turnkey logistics and transportation services via sea, land and air. We will protect you from risk and liability.</p>
         <Link to='/login'>
            <button className='border border-x-purple text-center py-3 px-4 w-[150px] h-[42px]  text-white text-sm rounded-lg bg-blue-900  '>
              Get started
            </button>
          </Link>
      </div>
      <div className=' md:w-1/2 w-full'>
        <img src={Logistic} alt="" className='w-full' />
      </div>
     
      </div>
     
    </div>
  )
}

export default LandingPage