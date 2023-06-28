import React from 'react'
import Sidemenu from '../components/Sidemenu'
import { TfiMobile, TfiLocationPin } from 'react-icons/tfi'
import { MdMailOutline } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='flex w-full'>
    <div className='w-1/5  mr-2 '>
    <Sidemenu  activeItem={'contact'}/>
    </div>

    <div className='w-4/5  h-full '>
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
                            <TfiMobile size={20} color="black"/>
                             +91 8486611888
                            </a>
                        </li>
                        <li>
                            <a>
                            <MdMailOutline size={20} color="black"/>
                             iamadrija@gmail.com
                            </a>
                        </li>
                        <li>
                            <a>
                            <TfiLocationPin size={20} color="black"/>
                            Guwahati, Assam
                            </a>
                        </li>
                        <li>
                            <a>
                           <BsGithub size={20} color="black"/>
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