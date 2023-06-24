import React from 'react'

const Sidemenu = () => {
  return (
<div className="drawer drawer-open">
<input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className=""></label>
    <div className='bg-neutral h-20'>
    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
    </div>
    <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li ><a className='active'>Dashboard</a></li>
      <li><a>Add Product</a></li>
      <li><a>Account</a></li>
      <li><a>Report Bug</a></li>
      
    </ul>
  </div>
</div>
  )
}

export default Sidemenu