"use client";

import { useState, useRef, useEffect } from "react";

interface InquiryButtonProps {
  service?: string;
}

export default function InquiryButton({ service }: InquiryButtonProps) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to form when opened
  useEffect(() => {
    if (open && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [open]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        Make Inquiry
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sliding Form */}
      <div
        ref={formRef}
        className={`fixed bottom-0 right-0 w-full sm:w-96 bg-white rounded-t-xl shadow-xl z-50 transform transition-transform duration-500 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-blue-600">Inquiry Form</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl"
          >
            ×
          </button>
        </div>

        <form className="flex flex-col gap-3 p-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Service Interested In"
            value={service ?? ""}
            readOnly={!!service}
            className={`border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
              service ? "bg-gray-100" : "bg-white"
            }`}
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
