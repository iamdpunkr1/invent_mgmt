import React, { useState } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdOutlineAddPhotoAlternate, MdAccountBox, MdLiveHelp, MdOutlineInventory2, MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidemenu = ({activeItem}) => {


  return (
    <div className="drawer drawer-open ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className=""></label>
        <div className="bg-primary h-20 flex justify-between p-5 items-center">
          <MdOutlineInventory2 size={35} color="white" />
        </div>
        <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
          <Link to="/dashboard" className={activeItem === 'dashboard' ? 'active' : ''} >
              <BsFillGrid3X3GapFill size={15} color="black" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/add_product" className={activeItem === 'add_product' ? 'active' : ''} >
              <MdOutlineAddPhotoAlternate size={20} color="black" /> Add Product
            </Link>
          </li>
          <li>
            <details open>
              <summary>
                <MdAccountBox size={20} color="black" /> Account
              </summary>
              <ul>
                <li>
                  <Link to="/profile"  className={activeItem === 'profile' ? 'active' : ''} >
                    Profile
                  </Link>
                </li>
                <li>
                <Link to="/edit_profile"  className={activeItem === 'edit_profile' ? 'active' : ''} >
                  Edit Profile
                </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/contactus" className={activeItem === 'contact' ? 'active' : ''} >
              <MdLiveHelp size={20} color="black" /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
