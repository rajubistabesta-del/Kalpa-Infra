"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define form state types
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setErrors({});
    }
  };

  return (
    <>
      <Header />
      <main
        id="contact"
        className="pt-20 md:pt-24 min-h-screen bg-gray-50 py-12"
      >
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-[#1a375f]">
              Contact Us
            </h2>
            <p className="text-center text-lg text-gray-600 mb-8 text-justify">
              We would love to hear from you! Please feel free to reach out with
              any inquiries.
            </p>
            {isSubmitted ? (
              <div className="text-center p-6 bg-green-100 text-green-700 rounded-lg">
                <p className="text-justify">
                  Thank you for your message! We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-[#1a375f] focus:border-[#1a375f] sm:text-sm"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-[#1a375f] focus:border-[#1a375f] sm:text-sm"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} // ✅ number, not string
                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border-gray-300 rounded-md shadow-sm focus:ring-[#1a375f] focus:border-[#1a375f] sm:text-sm"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
