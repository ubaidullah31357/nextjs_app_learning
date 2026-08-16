import { JSX } from "react";
import { contactAction } from "./contact.action";

function Contact(): JSX.Element {
  return (
    <form
      action={contactAction}
      className="bg-gray-800 rounded p-5 pl-36 flex flex-col items-start justify-start gap-5 text-white text-sm font-bold"
    >
      <label htmlFor="name" className="flex flex-col gap-1">
        Full Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          className="bg-gray-500 text-white rounded-sm p-3 h-9 w-130"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-1">
        Email Address
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="bg-gray-500 text-white rounded-sm p-3 h-9 w-130"
        />
      </label>
      <label htmlFor="message" className="flex flex-col gap-1">
        Message
        <textarea
          name="message"
          id="message"
          cols={60}
          rows={8}
          placeholder="Enter your message"
          className="bg-gray-500 text-white rounded-sm p-3"
        ></textarea>
      </label>

      <button
        type="submit"
        className="bg-pink-500 w-130 p-2 rounded cursor-pointer hover:bg-pink-600"
      >
        Send Message
      </button>
    </form>
  );
}
export default Contact;
