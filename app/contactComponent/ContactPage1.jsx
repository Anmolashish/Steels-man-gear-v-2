import React from "react";
export default function ContactPage1() {
  return (
    <div className="contact-page-1">
      <div className="w-full h-[40vh] bg-[#041A33] flex justify-center items-center relative">
        <div className="floating-div absolute flex top-6 w-[80%] h-[70vh] bg-blue-500 rounded-xl p-1">
          <iframe
            title="Google Map"
            className="contact-map-location w-full rounded-xl"
            style={{
              border: "2px solid white",
              backgroundColor: "white",
              color: "#3bceff",
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=183+Ajit+Nagar,+Patiala+147001+Punjab+(INDIA)&output=embed"
          >
            Map here
          </iframe>
        </div>
      </div>
      <div className="w-full h-[50vh] bg-white"></div>
    </div>
  );
}
