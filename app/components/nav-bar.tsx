import { useState } from 'react';
import { useNavigate} from "@remix-run/react";
import { Button } from "flowbite-react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '/logo_gest.png';
import { navItems } from '~/utils/constants';

export function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
  
    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };

    const navigate = useNavigate();
    
    return (
      <>
      <div className="bg-agDarkBlue-900 flex justify-between items-center h-24 max-w mx-auto px-4 text-white">
        {/* Logo */}        
        {
            nav ? <div className='block'></div>:
            <img src={logo} alt="AndebolGest" width={312} height={72}/>            
        }
        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <Button 
              className="border border-agLightBlue-300 bg-agLightBlue-100 text-black focus:ring-4 focus:ring-agLightBlue-100 enabled:hover:bg-agLightBlue-200 px-5 mx-2" 
              key={item.id}
              onClick={() => navigate(item.linkTo)}
            >
            {item.text}
          </Button>
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
              ? 'fixed md:hidden left-0 top-0 w-[40%] h-full border-r bg-agDarkBlue-900 ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <img className="m-2" src={logo} alt="AndebolGest" width={156} height={36}/>          
          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className="p-4 rounded-xl duration-300 hover:bg-agLightBlue-200 cursor-pointer hover:text-black"
              onClick={() => navigate(item.linkTo)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  };
  
  