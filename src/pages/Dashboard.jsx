import React from 'react'
import Sidemenu from '../components/Sidemenu'
import { TbCoinRupee } from "react-icons/tb";
import { TiShoppingCart} from "react-icons/ti"
import { BsCartX, BsSearch } from "react-icons/bs"
import { BiCategory, BiRupee } from "react-icons/bi"
import Card from '../components/Card'
import Table from '../components/Table';

const Dashboard = () => {
  return (

<div className='flex w-full'>
<div className='w-64 mr-2'>
<Sidemenu/>
</div>

<div className='  w-full h-full'>
    <div className='flex justify-between p-2'>
        <h1 className='text-xl font-bold mt-3'>Welcome, Zino</h1>
        <button className="btn btn-warning ">Logout</button>
    </div>
    <hr/>
    <h1 className='text-xl font-bold mt-2'>Inventory Stats</h1>
    <div className='flex gap-x-2 my-3'>
        <Card color={'bg-blue-500'} title={"Total Products"} amount={9} icon={<TiShoppingCart size={50}/>}/>
        <Card color={'bg-red-500'} title={"Total Stored values"} amount={30000} icon={<TbCoinRupee size={50}/>}/>
        <Card color={'bg-green-500'} title={"Out of Stock"} amount={1} icon={<BsCartX size={40}/>}/>
        <Card color={'bg-purple-500'} title={"All Categories"} amount={2} icon={<BiCategory size={40}/>}/>
    </div>
    <hr/>
    <div className='flex justify-between p-3'>
        <h1 className='text-xl font-bold mt-2'>Inventory Items</h1>
        <div className='input-with-icon flex'>
          <BsSearch size={17} color='grey' className='input-icon'/>
          <input type="text" placeholder=" Search by name" className=" input input-bordered input-primary w-full max-w-xs" />
        </div>
        
    </div>
    <Table/>
    <div className='flex justify-center mt-2'>
      <button className="btn btn-outline m-1">Prev</button>
      <button className="btn btn-outline m-1">1</button>
      <button className="btn btn-outline m-1">2</button>
      <button className="btn btn-outline m-1">Next</button>
    </div>
   </div>
  
</div>

  )
}

export default Dashboard