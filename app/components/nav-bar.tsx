import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '/logo_gest.png';
import logoIcon from '/logo.png';
import { colorMap } from '~/utils/constants'

export function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
  
    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };
  
    // Array containing navigation items
    const navItems = [
      { id: 1, text: 'Home' },
      { id: 2, text: 'Company' },
      { id: 3, text: 'Resources' },
      { id: 4, text: 'About' },
      { id: 5, text: 'Contact' },
    ];
  
    return (
      <div className={`bg-black flex justify-between items-center h-24 max-w mx-auto px-4 text-white`}>
        {/* Logo */}        
        {
            nav ? <div className='block'></div>:
            <img src={logo} alt="AndebolGest" width={312} height={72}/>            
        }
        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:bg-${colorMap.BLUE1} rounded-xl m-2 cursor-pointer duration-300 hover:text-black`}
            >
              {item.text}
            </li>
          ))}
        </ul>
  
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
  
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? `fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-black ease-in-out duration-500`
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <img className="m-2" src={logoIcon} alt="AndebolGest" width={48} height={48}/>          
          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 rounded-xl duration-300 hover:bg-${colorMap.BLUE1} cursor-pointer hover:text-black`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  