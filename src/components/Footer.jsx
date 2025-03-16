import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="h-30 w-full bg-brown p-4 text-primary bg-bluePrimary font-comic text-center flex-center">
      <div>
        <p className="text-sm">Follow us</p>
        <div className="flex-center gap-4 text-2xl m-2">
          <a href="https://www.facebook.com/takusiicecream" target="_blank">
            <FaFacebook className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className="cursor-pointer" />
          </a>
          <a href="https://x.com/?lang=en" target="_blank">
            <FaTwitterSquare className="cursor-pointer" />
          </a>
        </div>
        <p className="text-md">@2025 || All Rights Reserve</p>
      </div>
    </div>
  );
}

export default Footer;
