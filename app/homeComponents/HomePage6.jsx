"use client";
import React, { useState } from "react";

export default function ContactFAQ() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fax: "",
    comment: "",
  });

  const [status, setStatus] = useState("");

  const [faq, setFaq] = useState([
    {
      question: "What types of gears do you manufacture?",
      answer:
        "We specialize in manufacturing a wide range of gears, including gear hobs, gear cutters, bevel gears, worm gears, and custom gears tailored to specific client requirements.",
      open: false,
    },
    {
      question: "Can you create custom gears to my specifications?",
      answer:
        "Yes! Custom gear manufacturing is one of our core strengths. We work closely with clients from design to production to deliver gears that meet their exact needs.",
      open: false,
    },
    {
      question: "What quality control measures do you have in place?",
      answer:
        "We adhere to strict quality control processes at every stage of manufacturing, from material selection to final inspection, to ensure the highest standards of precision and durability.",
      open: false,
    },
    {
      question: "Is your gears ISO certified?",
      answer:
        "Yes, Steelman Gears is ISO certified, demonstrating our commitment to quality management. Our manufacturing processes adhere to strict international standards, ensuring that we consistently produce gears that meet the highest quality, precision, and reliability benchmarks.",
      open: false,
    },
    {
      question: "What materials do you use for your gears?",
      answer:
        "We use a variety of high-quality materials, including steel, stainless steel, brass, and engineered plastics, depending on the application and client specifications.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaq((prevFaq) =>
      prevFaq.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          fax: "",
          comment: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Try again later.");
    }
  };

  return (
    <div className="h-auto w-full bg-blue-200">
      {/* Header Section */}
      <div className="flex justify-center items-center bg-blue-200 h-[50vh] w-full"></div>

      {/* Floating Forms Section */}
      <div className="flex justify-center items-center bg-[#041A33] h-[40vh] w-full relative">
        <div className="floating-data h-[70vh] w-[80%] bg-blue-600 absolute bottom-[10vh] flex rounded-2xl text-white max-md:flex-col max-md:justify-between max-md:items-center max-md:min-h-[70vh]">
          {/* Contact Form */}
          <div className="flex justify-center items-center w-[50%] h-full max-md:w-full">
            <div className="w-[90%] min-h-[90%] bg-white rounded-2xl p-6 shadow-lg text-blue-900">
              <h3 className="text-3xl font-bold mb-4 text-center">
                Quick query form
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  name="fax"
                  placeholder="Your Fax number"
                  value={formData.fax}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="2"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex justify-center items-center w-[50%] h-full max-md:hidden">
            <div className="w-[90%] h-[90%] rounded-2xl p-6 text-white">
              <h3 className="text-3xl font-bold mb-5 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faq.map((item, index) => (
                  <div key={index} className="border-b pb-2">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left text-lg flex justify-between"
                    >
                      {item.question}
                      <span>
                        {item.open ? (
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material-two-tone/24/FFFFFF/collapse-arrow--v2.png"
                            alt="collapse-arrow--v2"
                          />
                        ) : (
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/material-rounded/24/FFFFFF/expand-arrow--v1.png"
                            alt="expand-arrow--v1"
                          />
                        )}
                      </span>
                    </button>
                    {item.open && (
                      <p className="text-white font-thin pt-2 border-t border-white">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
