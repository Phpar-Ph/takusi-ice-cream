import React from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/LOGO.svg'

function Navbar() {
  return (
    // Nabar 
    <div className='w-full bg-white top-0 sticky z-1'>
        <div className=' h-[90px] flex items-center justify-between font-comic text-brown px-[142px]'>
            {/* LOGO */}
            <div>
                <img src={Logo} alt="Takusi Ice Cream Logo" className="w-[157px]"  />
            </div>
            {/* NAV MENU  */}
            <div>
                <ul className='flex gap-[80px] text-2xl'>
                    <li className=''>
                        <Link to='home' smooth={true} duration={300}>Home</Link>
                    </li>
                    <li>
                        <Link to='flavor' smooth={true} duration={300}>Flavor</Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={300}>About</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={300}>Contact</Link>
                    </li>
                </ul>
            </div>
            {/* ORDER NOW BUTTON */}
            <div className=''>
                <button type="button" className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-xl">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
