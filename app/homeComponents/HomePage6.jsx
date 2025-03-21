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

  const [errors, setErrors] = useState({}); // State to track validation errors
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
    const { name, value } = e.target;

    // Validation rules
    if (name === "name") {
      // Allow only alphabets and spaces
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "email") {
      // Basic email validation
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "phone" || name === "fax") {
      // Allow only numbers and limit to 10 digits
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name =
        "Please enter a valid name (only alphabets and spaces allowed).";
    }

    // Email validation
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Fax validation (optional)
    if (formData.fax && !/^\d{10}$/.test(formData.fax)) {
      newErrors.fax = "Please enter a valid 10-digit fax number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
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
    } else {
      console.log("Form has errors:", errors);
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
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}

                <input
                  type="tel"
                  name="fax"
                  placeholder="Your Fax number"
                  value={formData.fax}
                  onChange={handleChange}
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fax && (
                  <p className="text-red-500 text-sm">{errors.fax}</p>
                )}

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
