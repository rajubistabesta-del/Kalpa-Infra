// src/app/_components/ContactForm.tsx
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    alert("Form submitted!"); // Placeholder
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Contact Us</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
        required
      />
      <textarea
        placeholder="Message"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
        rows={5}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}