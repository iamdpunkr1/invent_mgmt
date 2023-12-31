import React from 'react'
import {LuView, LuEdit, LuTrash2} from 'react-icons/lu'
import { Link } from 'react-router-dom'
const Table = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>s/n</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Cy Ganderton</td>
        <td>Quality </td>
        <td className='flex gap-2'>
          <Link to="/product_details">
             <LuView size={20} color='#7a34eb' />
           </Link>
          <Link to="/edit_product">
            <LuEdit size={20} color='#3493eb' />
          </Link>
            <LuTrash2  size={20} color='#eb4034' /> </td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Cy Ganderton</td>
        <td>Quality</td>
        <td className='flex gap-2'><LuView size={20} color='#7a34eb' /> <LuEdit size={20} color='#3493eb' /> <LuTrash2  size={20} color='#eb4034' /> </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Cy Ganderton</td>
        <td>Quality </td>
        <td className='flex gap-2'><LuView size={20} color='#7a34eb' /> <LuEdit size={20} color='#3493eb' /> <LuTrash2  size={20} color='#eb4034' /> </td>
      </tr>
            {/* row 3 */}
            <tr>
        <th>4</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Cy Ganderton</td>
        <td>Quality</td>
        <td className='flex gap-2'><LuView size={20} color='#7a34eb' /> <LuEdit size={20} color='#3493eb' /> <LuTrash2  size={20} color='#eb4034' /> </td>
      </tr>
            {/* row 3 */}
            <tr>
        <th>5</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Cy Ganderton</td>
        <td>Quality</td>
        <td className='flex gap-2'><LuView size={20} color='#7a34eb' /> <LuEdit size={20} color='#3493eb' /> <LuTrash2  size={20} color='#eb4034' /> </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Table