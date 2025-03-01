import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/LOGO.svg";

function Navbar() {
  return (
    // Nabar
    <div className="w-full bg-white top-0 fixed z-1 ">
      <section>
        <div className="container ">
          <div className=" h-20  flex items-center justify-between font-comic text-brown ">
            {/* LOGO */}
            <div>
              <img
                src={Logo}
                alt="Takusi Ice Cream Logo"
                className="w-[6rem] h-auto"
              />
            </div>
            {/* NAV MENU  */}
            <div className=" hidden lg:block">
              <ul className="flex space-x-8 text-2xl ">
                <li className="">
                  <Link to="home" smooth={true} duration={300}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="flavor" smooth={true} duration={300}>
                    Flavor
                  </Link>
                </li>
                <li>
                  <Link to="price" smooth={true} duration={300}>
                    Price
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={300}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={300}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* ORDER NOW BUTTON */}
            <div className="hidden">
              <button
                type="button"
                className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-4"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
