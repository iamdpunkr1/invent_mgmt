import React from 'react'
import Sidemenu from '../components/Sidemenu'
import user from '../assets/user.jpg'

const EditProfile = () => {
  return (
    <div className='flex w-full'>
    <div className='w-64 mr-2 '>
    <Sidemenu/>
    </div>

    <div className='  w-full h-full'>
        <div className='flex justify-between p-2'>
            <h1 className='text-xl font-bold mt-3'>Welcome, Adrija</h1>
            <button className="btn btn-warning ">Logout</button>
        </div>
        <hr/>
        <div className="card card-side bg-base-100 shadow-xl m-3">
        <figure><img src={user} alt="User Photo" className='w-96 h-96'/></figure>
        <div className="card-body w-1/2">
        <h2 className="card-title">Edit Your Profile</h2>

                <label className="label  pb-0 font-medium">
                    <span className="label-text ">Name :</span>
                </label>
                <input placeholder="Adrija" type='text' className="max-w-xs input input-primary input-bordered mb-3" /> 

                <label className="label  pb-0 font-medium">
                    <span className="label-text">Email :</span>
                </label>
                <input placeholder="iamadrija@gmail.com" type='email' className="max-w-xs input input-primary input-bordered " disabled/> 
                 <p className='mb-3 text-xs'> Email can't be changed</p>
                
                
                <label className="label  pb-0 font-medium">
                    <span className="label-text">Phone :</span>
                </label>
                <input placeholder="9954626599" type='number' className="max-w-xs input input-primary input-bordered mb-3" /> 
                

                <label className="label  pb-0 font-medium">
                    <span className="label-text">Bio :</span>
                </label>
                <textarea className="textarea textarea-primary max-w-sm textarea-md" placeholder="Hi I am Adrija working as an intern in IOCL"></textarea>
                
                <label className="label  pb-0 font-medium">
                    <span className="label-text">Profile Photo :</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />

        <hr />
        <div className="card-actions justify-start mt-3">
        <button className="btn btn-neutral">Save Changes</button>
        </div>
    
        </div>
        </div>
    </div>
    
    </div>
  )
}

export default EditProfile