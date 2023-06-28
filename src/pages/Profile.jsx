import React from 'react'
import Sidemenu from '../components/Sidemenu'
import user from '../assets/user.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
            <div className='flex w-full'>
            <div className='w-1/5  mr-2 '>
            <Sidemenu  activeItem={'profile'}/>
            </div>

            <div className='w-4/5 h-full'>
                <div className='flex justify-between p-2'>
                    <h1 className='text-xl font-bold mt-3'>Welcome, Adrija</h1>
                    <button className="btn btn-warning ">Logout</button>
                </div>
                <hr/>
                <div className="card card-side bg-base-100 shadow-xl m-3">
                <figure><img src={user} alt="User Photo" className='w-96 h-96'/></figure>
                <div className="card-body w-1/2">
                <div>
                    <span className='font-bold'>Name: </span><span className='text-slate-700'>Adrija </span>
                </div>
                <hr />          
                <div>
                    <span className='font-bold'>Email: </span><span className='text-slate-700'>iamadrija@gmail.com</span>
                </div>
                <hr />
                <div>
                    <span className='font-bold'>Phone: </span><span className='text-slate-700'>9954626599</span>
                </div>
                <hr />          
                <div>
                    <span className='font-bold'>Bio: </span><span className='text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus aspernatur aliquid qui repellendus quibusdam sed hic. A assumenda laborum debitis deleniti sed, quibusdam nulla fuga veritatis pariatur odit, saepe architecto.</span>
                </div>
                <hr />
                <div className="card-actions justify-start mt-3">
                <Link to="/edit_profile">
                    <button className="btn btn-primary">Edit Profile</button>
                </Link>
                </div>
            
                </div>
                </div>
            </div>
            
            </div>
  )
}

export default Profile