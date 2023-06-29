import React from 'react'
import invt from '../assets/invt.jpg'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='hero min-h-screen flex w-full'>
          
    <div className="w-2/3"> 
        <img src={invt}/>
    </div>

    <div className="w-1/3">
      <div className='w-96 card bg-accent p-3'>
        <h2 className='text-center font-bold text-2xl pt-3'>Sign Up</h2>
        
        <div className="card-body">
          <label className="label  pb-0">
            <span className="label-text">Name</span>
          </label>
          <input placeholder="Enter your name" type='email' className="input input-bordered" />
         

          <label className="label  pb-0">
            <span className="label-text">Email</span>
          </label>
          <input placeholder="abc@gmail.com" type='email' className="input input-bordered" />
         
          <label className="label mt-2 pb-0">
            <span className="label-text">Password</span>
          </label>
          <input placeholder="********" type='password' className="mb-1 input input-bordered" />
          
          <label className="label pb-0">
            <span className="label-text">Confirm Password</span>
          </label>
          <input placeholder="*********" type='password' className="mb-3 input input-bordered" />
          
          <button className="btn btn-primary mb-3">Sign Up</button>
          
          <Link to="/" className='text-indigo-700 text-center font-semibold text-sm'>Forgot password?</Link>
          <p className='text-center font-semibold text-sm'>Already have a account?<Link className='text-indigo-700' to="/"> Login</Link></p>
          
        </div>
      </div>
    </div>

  </div>
  )
}

export default Signup