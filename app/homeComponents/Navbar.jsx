import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="upper-navbar relative h-[10vh] w-full bg-[#041A33] flex justify-between items-center px-[10%] max-md:hidden">
        <div className="nav-top-tabs flex justify-center items-center text-[#97A0AA] text-sm gap-[15px]">
          <div className="phone-number flex justify-center items-center gap-[3px]">
            <img
              width="14"
              height="14"
              src="https://img.icons8.com/material-outlined/50/00c3fe/phone.png"
              alt="phone"
            />
            <div>+91 175 221 8031</div>
          </div>
          <div className="address flex justify-center items-center gap-[3px]">
            <img
              width="14"
              height="14"
              src="https://img.icons8.com/ios-filled/50/00c3fe/visit.png"
              alt="visit"
            />
            <div>183 Ajit Nagar, Patiala 147001 Punjab (INDIA)</div>
          </div>
        </div>
        <div className="nav-top-tabs text-[#97A0AA] text-sm flex justify-center items-center gap-5">
          <div className="social-media-icons w-[20px] h-[20px] ">
            <a href="https://www.facebook.com/SteelmansGears/#" target="_blank">
              <img
                className="w-full h-full "
                width="20"
                height="20"
                src="https://img.icons8.com/material-two-tone/24/FFFFFF/facebook-f--v2.png"
                alt="facebook-f--v2"
              />
            </a>
          </div>
          <div className="social-media-icons">
            <a href="https://x.com/SteelmansGears" target="_blank">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/forma-bold/24/FFFFFF/twitterx.png"
                alt="twitterx"
              />
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://www.youtube.com/user/steelmansgears"
              target="_blank"
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/sf-black-filled/64/FFFFFF/youtube-play.png"
                alt="youtube-play"
              />
            </a>
          </div>
        </div>

        <div className="white-divider w-[80%] h-[1px] bg-[#97A0AA] absolute bottom-0"></div>
      </div>
      <div className="lower-navbar z-20 sticky top-0 h-[12vh] w-full bg-[#041A33] flex justify-between items-center px-[10%]">
        <div className="navbar-logo w-[120px]">
          <Link href="/">
            <img
              className="w-[100%]"
              src="/Images/logo2.png"
              alt="Steelmans gears logo"
            />
          </Link>
        </div>
        <div className="navbar-tabs flex text-white gap-[80px] font-bold max-md:hidden">
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            Home
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            About
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            Products
          </div>
          <div className="navbar-tab hover:text-[#00C3FE] tracking-widest transition duration-300 ease-in-out cursor-pointer">
            Contact
          </div>
        </div>
        <div className="hamburger md:hidden">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-two-tone/24/FFFFFF/menu--v1.png"
            alt="menu--v1"
          />
        </div>
      </div>
    </>
  );
}
