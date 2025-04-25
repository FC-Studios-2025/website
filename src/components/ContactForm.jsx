import { useForm, ValidationError } from "@formspree/react";
import React from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzrbqpb");

  if (state.succeeded) {
    return (
      <p className="text-center text-green-700 text-lg mt-4 bg-black">
        Thanks for reaching out to Film Craft Studios!
      </p>
    );
  }

  return (
    <div>
      <div>
        <div className="text-xl my-10 md:text-2xl lg:text-4xl font-bold">
          <h2>
            Get In <span className="italic font-light">Touch</span>
          </h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-gray-700 border text-white p-6 md:p-8 rounded-lg shadow-lg w-full"
      >
        {/* Name Field */}
        <div className="md:flex gap-8">
          <div className="w-full">
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-2 mb-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="contact" className="block text-gray-300 mb-1">
              Contact
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              required
              className="w-full p-2 mb-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Field */}
          <div className="w-full">
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-2 mb-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mb-3"
            />
          </div>
        </div>
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full p-2 mb-3 border border-gray-600 rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mb-3"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 rounded-md transition-all"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
