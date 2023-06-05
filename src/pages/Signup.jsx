import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';


const sechma = yup.object({
  firstName: yup.string().required("First name is required").min(3, "First name should be less than 3 letter").max(20, "First name should be more than 20 letter") ,
  lastName: yup.string().required("Last name is required").min(3, "Last name should be less than 3 letter").max(20, "Last name should be more than 20 letter") ,
  email: yup.string().email().required(" Email is not valid"),
  phoneNumber: yup.number().required("Phone number is not valid!"),
  password: yup.string().required().min(9, "Your password should be at least 9 characters of lower case and upper case.  "),
  confirmPassword: yup.string().oneOf([yup.ref("password")],"Password must match" ).required()
})


const Signup = () => {

  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [email , setEmail] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(sechma)
  });
console.log(errors)

  const onSubmit = (e, data) =>{
    // e.preventDefault();
   if( firstName && lastName && email && phoneNumber && password && confirmPassword){
      navigate("/login")
   }
   console.log(data)
  };
  return (
    <div className=' md:bg-blue-900 w-screen full md:py-8'>
       <div className='bg-white md:w-1/3 w-full mx-auto p-8  border  rounded '>
        <img src="https://lh3.googleusercontent.com/a-/AD_cMMRciwlvy5PAUC-vEBCceMdqH4Fe0pGRgCy-TqZd=s64-p-k-rw-no" alt="" />
        <h1 className='text-center my-7 text-xl font-bold'>Create Account</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='items-center p-4'>
                <label htmlFor="" className='text-lg'>First Name</label><br /> 
                <input type="text"  placeholder='Enter your first name'
                 className='caret-blue-400 mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none capitalize '
                 {...register("firstName")}
                 onChange={(e) => setFirstName(e.target.value)}
                 />
                 <span className=' text-red-600 '> {errors.firstName?.message}</span>
                 <br />
                 

                <label htmlFor="" className='text-lg'>Last Name</label><br /> 
                <input type="text"  placeholder='Enter your last name' 
                 className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none capitalize'
                 {...register("lastName")}
                 onChange={(e) => setLastName(e.target.value)}
                 />
                 <span className=' text-red-600 mb-4'> {errors.lastName?.message}</span>

                 <br />
                <label htmlFor="" className='text-lg'>Email</label><br /> 
                <input type="emal"  placeholder='Enter your email'
                  className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none ' 
                  {...register("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className=' text-red-600 mb-4'> {errors.email?.message}</span>

                  <br />
                <label htmlFor="" className='text-lg'>Phone Number</label><br /> 
                <input type="text"  placeholder='Enter your phone number'
                  className='caret-blue-400  mt-1 mb-4 border border-blue-100 rounded-lg  w-full p-3 outline-none '
                  {...register("phoneNumber")}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                   <span className=' text-red-600 mb-4'> {errors.phoneNumn?.message}</span>

                  <br />
                <label htmlFor="" className='text-lg'>Password</label><br /> 
                <input type="password"  placeholder='Enter your Password'  
                className='caret-blue-400  mt-1 mb-4 border border-blue-100  rounded-lg w-full p-3 outline-none '
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}

                /><AiOutlineEye className='relative bottom-12 right-4 float-right '/>
                  <span className=' text-red-600 mb-4'> {errors.password?.message}</span>

                <br />
                <label htmlFor="" className='text-lg'>Confirm Password</label> <br /> 
                <input type="password"  placeholder='confirm your password' 
                 className='caret-blue-400  mt-1 mb-4 border border-blue-100 rounded-lg  w-full p-3 outline-none '
                 {...register("confirmPassword")}
                 onChange={(e) => setConfirmPassword(e.target.value)}

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