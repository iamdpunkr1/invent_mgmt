import React from 'react'
// import { BsFillGridFill } from 'react-icons/bs';
const Card = ({color, title, amount, icon}) => {
  return (
    <div className={`card w-64 ${color} text-primary-content`}>
        
        <div className="flex p-5 gap-x-4">
            {icon}    
            <div >
                <h2 className="card-title">{title}</h2>
                <p>{amount}</p>
            </div>
        </div>
    </div>
  )
}

export default Card