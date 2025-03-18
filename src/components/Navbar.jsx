import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/LOGO.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  // CHANGE NAVBAR WHEN SCROLL
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // SIDE BAR
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // Nabar
    <div className={navbar ? "navbar active" : "navbar"}>
      <section className="container pt-4 pb-4  flex  items-center  md:justify-center justify-between font-comic font-medium">
        {/* NAV MENU  */}
        <div className=" hidden md:block">
          <ul className="navbar-ul">
            <li className="navbar-li ">
              <Link
                to="home"
                smooth={true}
                spy={true}
                offset={-30}
                duration={300}
                activeClass="activeNav"
              >
                Home
              </Link>
            </li>
            <li className="navbar-li">
              <Link
                to="flavor"
                smooth={true}
                spy={true}
                offset={-30}
                duration={300}
                activeClass="activeNav"
              >
                Flavor
              </Link>
            </li>
            <li>
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
            </li>
            <li className="navbar-li">
              <Link
                to="about"
                smooth={true}
                spy={true}
                offset={-30}
                duration={300}
                activeClass="activeNav"
              >
                About
              </Link>
            </li>
            <li className="navbar-li">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                // offset={-25}
                duration={300}
                activeClass="activeNav"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* ORDER NOW BUTTON */}
        {/* <div className="hidden lg:block">
            <button
              type="button"
              className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-4"
            >
              Order Now
            </button>
          </div> */}

        {/* LOGO  MOBILE*/}
        <div className="cursor-pointer  md:hidden">
          <Link to="home" smooth={true} duration={300}>
            <img
              src={Logo}
              alt="Takusi Ice Cream Logo"
              className="w-[4rem] h-auto"
            />
          </Link>
        </div>
        <div
          className="md:hidden text-4xl cursor-pointer text-white m-4"
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
          className={`fixed top-0 right-0 h-full w-64 bg-bluePrimary text-primary shadow-lg transform ${
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
              <Link to="home" smooth={true} duration={300} onClick={toggleMenu}>
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
            {/* <li>
              <button
                type="button"
                className="text-white bg-brown hover:bg-blue-800 px-4 py-2 rounded-xl text-4"
                onClick={toggleMenu}
              >
                Order Now
              </button>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
