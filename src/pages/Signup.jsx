import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const sechma = yup.object({
  firstName: yup.string().required("first name should not be less than 3 and more than 20 letter").min(3).max(20) ,
  lastName: yup.string().required("first name should not be less than 3 and more than 20 letter").min(3).max(20) ,
  email: yup.string().email().required("valid email is not valid"),
  phoneNumber: yup.number().required("phone number is not valid!"),
  password: yup.string().required("Your password should be at least 9 characters of lower case and upper case.  "),
  confirmPassword: yup.string().required("password must match")
})

const Signup = () => {
  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(sechma)
  });
console.log(errors)

  const onSubmit = data => console.log(data);
  return (
    <div className=' bg-blue-900 w-screen full md:py-8'>
       <div className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center my-7 text-xl font-bold'>Create Account</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='items-center p-4'>
                <label htmlFor="" className='text-lg'>First Name</label><br /> 
                <input type="text"  placeholder='Enter your first name'
                 className='caret-blue-400 mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none capitalize '
                 {...register("firstName")}
                 />
                 <span className=' text-red-600 mb-4'> {errors.firstName?.message}</span>
                 <br />
                 

                <label htmlFor="" className='text-lg'>Last Name</label><br /> 
                <input type="text"  placeholder='Enter your last name' 
                 className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none capitalize'
                 {...register("lastName")}
                 />
                 <span className=' text-red-600 mb-4'> {errors.lastName?.message}</span>

                 <br />
                <label htmlFor="" className='text-lg'>Email</label><br /> 
                <input type="emal"  placeholder='Enter your email'
                  className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none ' 
                  {...register("email")}
                  />
                  <span className=' text-red-600 mb-4'> {errors.email?.message}</span>

                  <br />
                <label htmlFor="" className='text-lg'>Phone Number</label><br /> 
                <input type="text"  placeholder='Enter your phone number'
                  className='caret-blue-400  mt-1 mb-4 border border-blue-100 rounded-lg  w-full p-3 outline-none '
                  {...register("phoneNumber")}
                  />
                   <span className=' text-red-600 mb-4'> {errors.phoneNumn?.message}</span>

                  <br />
                <label htmlFor="" className='text-lg'>Password</label><br /> 
                <input type="password"  placeholder='Enter your Password'  
                className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none '
                {...register("password")}
                /><AiOutlineEye className='relative bottom-12 right-4 float-right '/>
                  <span className=' text-red-600 mb-4'> {errors.password?.message}</span>

                <br />
                <label htmlFor="" className='text-lg'>Confirm Password</label> <br /> 
                <input type="password"  placeholder='confirm your password' 
                 className='caret-blue-400  mt-1 mb-4 border border-blue-100 rounded-lg  w-full p-3 outline-none '
                 {...register("confirmPassword")}
                 /><AiOutlineEye className='relative bottom-12 right-4 float-right '/>
                 <span className=' text-red-600 mb-4'> {errors.confirmPassword?.message}</span> 
                 <br /> 
                <input type="submit" value="Sign Up"  className=' cursor-pointer mt-1 mb-4 border border-blue-100 bg-blue-900 text-center text-white rounded-lg w-full p-3 outline-none hover:opacity-50' />
              <div>
                <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-900 ml-1'>Login</Link></p>
              </div>
            </form>
       </div>
    </div>
  )
}

export default Signup