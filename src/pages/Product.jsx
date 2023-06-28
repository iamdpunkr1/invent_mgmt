import React from 'react'
import Sidemenu from '../components/Sidemenu'
import dslr from '../assets/dslr.jpg'

const Product = () => {
  return (
            <div className='flex w-full'>
            <div className='w-1/5  mr-2'>
            <Sidemenu  activeItem={'dashboard'}/>
            </div>

            <div className='w-4/5  h-full'>
                <div className='flex justify-between p-2'>
                    <h1 className='text-xl font-bold mt-3'>Welcome, Zino</h1>
                    <button className="btn btn-warning ">Logout</button>
                </div>
                <hr/>
                <h1 className='text-xl font-bold mt-2'>Product Details</h1>

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={dslr} alt="Shoes" /></figure>
                    
                    <div className='flex m-2'>
                        <p className='font-bold pl-2'>Product availability: </p>
                        <p className='text-green-400 ml-2 font-bold'> In Stock</p> 
                    </div>
                    <hr />
                    <div className="card-body">
                        
                        <h2 className="card-title"><span className='underline'>Name:</span><span>Canon Pixar DSLR D40 Camera </span></h2>
                        
                        <div>
                            <span className='font-bold'>Category: </span><span>ELectronics</span>
                        </div>
                        
                        <div>
                            <span className='font-bold'>Price: </span><span>45,000</span>
                        </div>

                        <div>
                            <span className='font-bold'>Quantity in stock: </span><span>4</span>
                        </div>
                        
                        <div>
                            <span className='font-bold'>Total Value in stock: </span><span>1,80,000</span>
                        </div>
                        
                        <hr />

                        <div>
                            <span className='font-bold'>Description: </span><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita quasi blanditiis voluptas quod assumenda voluptate reprehenderit unde dolorum deleniti illo harum, architecto deserunt consectetur molestias atque amet commodi? Possimus?</span>
                        </div>

                        <hr />

                        <p>
                            <span className='text-xs'>Created at: </span><span className='text-xs'>2023-06-27_10:32:00:00</span>
                        </p>

                        <p>
                            <span className='text-xs'>Updated at: </span><span className='text-xs'>2023-06-27_10:32:00:00</span>
                        </p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            
            </div>
  )
}

export default Product