import React from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { MdOutlineAddPhotoAlternate, MdAccountBox, MdLiveHelp, MdOutlineInventory2, MdMenuOpen } from 'react-icons/md'

const Sidemenu = () => {
  return (
<div className="drawer drawer-open">
<input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className=""></label>
    <div className='bg-primary h-20 flex justify-between p-4 items-center'>
    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
      {/* <MdOutlineInventory2 size={30} color="white"/> */}
      <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>INV</span>
          </div>
        </div> 
      <MdMenuOpen  size={30} color="white"/>
    </div>
    <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li >

        <a className='active'><BsFillGrid3X3GapFill size={15} color='black'/> Dashboard</a>
      </li>
      <li><a><MdOutlineAddPhotoAlternate size={20} color='black'/> Add Product</a></li>
      <li>
      <details open>
            <summary><MdAccountBox size={20} color='black'/>  Account</summary>
            <ul>
              <li><a>Profile</a></li>
              <li><a>Edit Profile</a></li>
            </ul>
          </details>
      </li>
      <li><a><MdLiveHelp size={20} color='black'/> Contact Us</a></li>
      
    </ul>
  </div>
</div>
  )
}

export default Sidemenu