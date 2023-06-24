
import invt from '../assets/invt.jpg'

import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const handleSubmit =()=>{

    navigate('/dashboard')
  }

    return (
        <div className='hero min-h-screen flex w-full'>
          
          <div className="w-2/3"> 
              <img src={invt}/>
          </div>

          <div className="w-1/3">
            <div className='w-96 card bg-accent p-5 '>
              <h2 className='text-center font-bold text-xl pt-3'>Login</h2>
              
              <div className="card-body">
                <label className="label  pb-0">
                  <span className="label-text">Email</span>
                </label>
                <input placeholder="abc@gmail.com" type='email' className="input input-bordered" />
               
                <label className="label mt-2 pb-0">
                  <span className="label-text">Password</span>
                </label>
                <input placeholder="******" type='password' className="mb-3 input input-bordered" />
                <button className="btn btn-primary mb-3" onClick={handleSubmit}>Login</button>
                
                <Link to="/" className='text-indigo-700 text-center font-semibold text-sm'>Forgot password?</Link>
                <p className='text-center font-semibold text-sm'>Don't have a account? <Link className='text-indigo-700' to="/signup">Sign Up</Link></p>
                
              </div>
            </div>
          </div>

        </div>
  )
}

export default Home