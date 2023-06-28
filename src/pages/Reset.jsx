import React from 'react'
import { Link } from 'react-router-dom'
const Reset = () => {
  return (
    <div className='hero min-h-screen'>

      <div className='w-96 card bg-accent p-5 '>
        <h2 className='text-center font-bold text-2xl pt-3'>Reset Password</h2>
        
        <div className="card-body">
        <label className="label mt-2 pb-0">
            <span className="label-text">New Password</span>
          </label>
          <input placeholder="********" type='password' className="mb-1 input input-bordered" />
          
          <label className="label pb-0">
            <span className="label-text">Confirm Password</span>
          </label>
          <input placeholder="*********" type='password' className="mb-3 input input-bordered" />
         

          <button className="btn btn-primary my-3" >Reset Password</button>
          
          <p className='text-center font-semibold text-sm'>Go back to Home Page? <Link className='text-indigo-700' to="/">Home</Link></p>
          
        </div>
      </div>


  </div>
  )
}

export default Reset