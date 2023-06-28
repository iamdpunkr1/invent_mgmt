import React from 'react'
import { Link } from 'react-router-dom'
const Forgot = () => {
  return (
    <div className='hero min-h-screen'>

      <div className='w-96 card bg-accent p-5 '>
        <h2 className='text-center font-bold text-2xl pt-3'>Forgot Password</h2>
        
        <div className="card-body">
          <label className="label  pb-0">
            <span className="label-text">Email</span>
          </label>
          <input placeholder="abc@gmail.com" type='email' className="input input-bordered" />
         

          <button className="btn btn-primary my-3" >Get Reset Email</button>
          
          <p className='text-center font-semibold text-sm'>Go back o login page? <Link className='text-indigo-700' to="/">Login</Link></p>
          
        </div>
      </div>


  </div>
  )
}

export default Forgot