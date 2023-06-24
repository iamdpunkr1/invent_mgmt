import React from 'react'
import Sidemenu from '../components/Sidemenu'
import { TbCoinRupee } from "react-icons/tb";
import Card from '../components/Card'
import Table from '../components/Table';
const Dashboard = () => {
  return (

<div className='flex w-full'>
<div className='w-64 mr-2'>
<Sidemenu/>
</div>

<div className='  w-full h-full'>
    <div className='flex justify-between p-3'>
        <h1 className='text-lg font-bold mt-2'>Welcome, Zino</h1>
        <button className="btn btn-warning mb-3">Logout</button>
    </div>
    <hr/>
    <h1 className='text-lg font-bold mt-2'>Inventory Stats</h1>
    <div className='flex gap-x-2 my-3'>
        <Card color={'bg-blue-500'} title={"Total Products"} amount={9} icon={<TbCoinRupee size={40}/>}/>
        <Card color={'bg-red-500'} title={"Total Stored values"} amount={30000} icon={<TbCoinRupee size={40}/>}/>
        <Card color={'bg-green-500'} title={"Out of Stock"} amount={1} icon={<TbCoinRupee size={40}/>}/>
        <Card color={'bg-purple-500'} title={"All Categories"} amount={2} icon={<TbCoinRupee size={40}/>}/>
    </div>
    <hr/>
    <div className='flex justify-between p-3'>
        <h1 className='text-lg font-bold mt-2'>Inventory Items</h1>
        <input type="text" placeholder="Search Items.." className="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <Table/>
   </div>
  
</div>

  )
}

export default Dashboard