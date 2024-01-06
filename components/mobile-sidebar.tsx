"use client"

import React, { useState } from 'react'
import Sidebar from './sidebar';

const MobileSidebar = () => {
    const [isChecked, setIsChecked] = useState(true);

    const toggleDrawer = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="flex">
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
          checked={!isChecked}
          onChange={toggleDrawer}
        />
        <label
          htmlFor="drawer-toggle"
          className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-gray-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64 z-10"
        >
          <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
          <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
        </label>
        <div
          className={`fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform ${
            isChecked ? '-translate-x-full transition duration-300' : 'translate-x-0'
          } `}
        >
            <Sidebar />
        </div>
      </div>
  )
}

export default MobileSidebar
