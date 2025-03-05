import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/LOGO.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // Nabar
    <div className="w-full bg-white top-0 fixed z-10 ">
      <section className="container ">
        <div className=" h-20  flex items-center justify-between font-comic text-brown ">
          {/* LOGO */}
          <div className="cursor-pointer">
            <Link to="home" smooth={true} duration={300}>
              <img
                src={Logo}
                alt="Takusi Ice Cream Logo"
                className="w-[6rem] h-auto"
              />
            </Link>
          </div>
          {/* NAV MENU  */}
          <div className=" hidden lg:block">
            <ul className="flex space-x-8 text-2xl ">
              <li className="cursor-pointer">
                <Link to="home" smooth={true} duration={300}>
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="flavor" smooth={true} duration={300}>
                  Flavor
                </Link>
              </li>
              <li>
                {/* <Link to="price" smooth={true} duration={300}>
                  Price
                </Link> */}
              </li>
              <li className="cursor-pointer">
                <Link to="about" smooth={true} duration={300}>
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to="contact" smooth={true} duration={300}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* ORDER NOW BUTTON */}
          <div className="hidden lg:block">
            <button
              type="button"
              className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-4"
            >
              Order Now
            </button>
          </div>
          <div
            className="lg:hidden text-2xl cursor-pointer "
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <GiHamburgerMenu className="hidden" />
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
          {/* MOBILE MENU */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div
              onClick={toggleMenu}
              className="text-3xl cursor-pointer absolute right-0 m-4"
            >
              {!isMenuOpen ? <IoMdClose className="hidden" /> : <IoMdClose />}
            </div>
            <ul className="flex flex-col space-y-4  text-2xl p-8">
              <li className="cursor-pointer border-b-1 pb-4">
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer border-b-1 pb-4">
                <Link
                  to="flavor"
                  smooth={true}
                  duration={300}
                  onClick={toggleMenu}
                >
                  Flavor
                </Link>
              </li>
              <li className="cursor-pointer border-b-1 pb-4">
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="contact"
                  smooth={true}
                  duration={300}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-4"
                  onClick={toggleMenu}
                >
                  Order Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
