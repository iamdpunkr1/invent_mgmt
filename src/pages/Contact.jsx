import React from 'react'
import Sidemenu from '../components/Sidemenu'

const Contact = () => {
  return (
    <div className='flex w-full'>
    <div className='w-64 mr-2 '>
    <Sidemenu/>
    </div>

    <div className='  w-full h-full '>
        <div className='flex justify-between p-2'>
            <h1 className='text-xl font-bold mt-3'>Welcome, Adrija</h1>
            <button className="btn btn-warning ">Logout</button>
        </div>
        <hr/>
        <h1 className='text-2xl font-bold m-5'>Contact Us</h1>

        <div className='flex gap-5'>

        <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100 w-1/2">
                <div className="card-body ">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-sm mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        className="input input-primary w-full"
                        placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-sm mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="input input-primary w-full"
                        placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-sm mb-2">
                        Message
                        </label>
                        <textarea
                        id="message"
                        className="textarea textarea-primary w-full"
                        rows="4"
                        placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full" >
                        Submit
                    </button>
                    </form> 
               </div>
            </div>


            <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-200 w-1/2">
                <div className="card-body text-center items-center">
                    <h2 className="card-title">Fill the form or contact us via other channels listed below</h2>
                    <ul className="menu bg-base-200 w-56 rounded-box mt-10">
                        <li>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                             +91 8486611888
                            </a>
                        </li>
                        <li>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             iamadrija@gmail.com
                            </a>
                        </li>
                        <li>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            Guwahati, Assam
                            </a>
                        </li>
                        <li>
                            <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            @iamadrija
                            </a>
                        </li>
                        </ul>
               </div>
            </div>
        </div>



     </div>

    </div>
  )
}

export default Contact