import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="contact" className=" bg-primary w-full">
      <div className="w-full mx-auto px-[5vw] text-white py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left: Logo, Address, Socials */}
        <div className="flex-1 flex flex-col gap-4">
          <img src={Logo} alt="United FC Kodagu" className="w-32 mb-2" />
          <div className="font-semibold">United FC Kodagu</div>
          <a href="https://maps.app.goo.gl/vS53ojPosgNYsHBw7" target="_blank" className="text-sm leading-6 hover:underline cursor-pointer">
            Marigold International School <br />
            SH17, Kumbalgodu, Challegatta <br />
            Karnataka 560074
          </a>
          <div className=" flex flex-col sm:flex-row gap-4 mt-4">
            {/* Social icons placeholder */}

            <a target="_blank"  href="https://www.instagram.com/unitedfckodagu/?hl=en" className="font-bold border border-white px-4 py-2 hover:bg-white hover:text-primary transition duration-100">
              Instagram
            </a>
            <a target="_blank" href="https://www.youtube.com/@UnitedfcKodagu" className="font-bold border border-white px-4 py-2 hover:bg-white hover:text-primary transition duration-100">
              YouTube
            </a>

            {/* <button className="font-bold border border-white px-4 py-2 hover:bg-white hover:text-primary transition duration-100">TikTok</button> */}
          </div>
        </div>
        {/* Center: Links */}
        <div className="flex-1 flex flex-col  sm:border-l  border-white/20 px-8 gap-4">
          <Link to="/about" className="text-white hover:underline">
            About The Club
          </Link>
          <div  className="text-white flex flex-col gap-2">
            Contact Us & FAQs
            <div className="flex flex-col text-lg font-medium text-white/80" >
              <div >Mobile Number: <span className="text-white">+91 89518 20251</span></div>
               <div>Email: <a href="mailto:media@ufckodagu.com" className="hover:underline text-white">media@ufckodagu.com</a></div>
            </div>
          </div>
          
          {/* <a href="#" className="text-white hover:underline">The Shed – Chat, Rumours & More</a> */}
        </div>
        {/* Right: App promo */}
      </div>
      {/* Bottom bar */}
      <div className="bg-[#18124b] py-6 mt-4">
        <div className="w-full mx-auto px-[5vw] flex flex-wrap gap-6 text-sm">
          {/* <a href="#" className="text-white hover:underline">Careers</a> */}
          {/* <a href="#" className="text-white hover:underline">Modern Slavery Act</a> */}
          <Link to="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </Link>
          {/* <a href="#" className="text-white hover:underline">Cookies Policy</a> */}
          {/* <a href="#" className="text-white hover:underline">Terms & Conditions</a> */}
          {/* <a href="#" className="text-white hover:underline">Sustainability Policy</a> */}
        </div>
        <div className="w-full mx-auto px-[5vw] mt-4 text-white text-xs">
          © 2025 United FC Kodagu. All rights reserved. No part of this site may
          be reproduced without our written permission.
        </div>
      </div>
    </div>
  );
};

export default Footer;
