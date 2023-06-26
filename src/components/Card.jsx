import React from 'react'
import { BiRupee } from 'react-icons/bi';
const Card = ({color, title, amount, icon}) => {
  return (
    <div className={`card w-64 ${color} text-white`}>
        
        <div className="flex p-4 gap-x-4">
            <div className='mt-1'> { icon } </div>    
            <div >
                <h2 className="card-title">{title}</h2>
                <p className='flex'> {title==="Total Stored values" && <BiRupee size={18} className='mt-1'/>}{amount}</p>
            </div>
        </div>
    </div>
  )
}

export default Card