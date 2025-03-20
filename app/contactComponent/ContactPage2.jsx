import Link from "next/link";
import React from "react";

export default function ContactPage2() {
  return (
    <div className="w-full min-h-[45vh] p-4 flex flex-col gap-2 bg-gradient-to-b from-white to-blue-200">
      <div className="header text-4xl text-center font-bold ">
        Have a Question? <br className="flex md:hidden" /> Contact Us!
      </div>
      <div className="subline text-center flex justify-center items-center">
        Feel free to visit us for any inquiries or to discuss custom orders!
      </div>
      <div className="max-md:flex max-md:items-center max-md:justify-center">
        <div className="contact-options flex max-md:flex-col max-md:gap-4 max-md:justify-center justify-evenly mt-10">
          <a href="tel:+91 1757961320" className="flex items-center gap-2">
            <div className="contact-icon rounded-full bg-blue-900 w-[40px] flex justify-center items-center h-[40px]">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-outlined/50/FFFFFF/phone.png"
                alt="phone"
              />
            </div>
            <div className="contact-data">
              <div className="contact-card-heading font-bold text-2xl">
                Contact us
              </div>
              <div className="contact-card-data">+91 1757961320</div>
            </div>
          </a>
          <a
            href="mailto:sales@steelmans.com"
            className="flex items-center gap-2"
          >
            <div className="contact-icon rounded-full bg-blue-900 flex justify-center items-center w-[40px] h-[40px]">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-outlined/50/FFFFFF/mail.png"
                alt="mail"
              />
            </div>
            <div className="contact-data">
              <div className="contact-card-heading font-bold text-2xl">
                Sales enquiry
              </div>
              <div className="contact-card-data">sales@steelmans.com</div>
            </div>
          </a>
          <div className="flex items-center gap-2">
            <div className="contact-icon rounded-full bg-blue-900 flex justify-center items-center w-[40px] h-[40px]">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-outlined/50/FFFFFF/marker.png"
                alt="marker--v1"
              />
            </div>
            <div className="contact-data">
              <div className="contact-card-heading font-bold text-2xl">
                Regd. office
              </div>
              <div className="contact-card-data">
                183 Ajit Nagar, Patiala
                <br /> 147001 Punjab (INDIA)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
