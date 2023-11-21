"use client";
import { useState, useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const nameRef = useRef<string>("");
  const [email, setEmail] = useState("");
  const emailRef = useRef<string>("");
  const [message, setMessage] = useState("");
  const messageRef = useRef<string>("");
  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Page header */}
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <h1 className="h1 mb-4 font-red-hat-display">Get in touch</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Just fill out this short form and I'll get back to you!
              </p>
            </div>

            {/* Contact form */}
            <form className="mx-auto max-w-xl">
              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-300"
                    htmlFor="name"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => {
                      setName(event.currentTarget.value);
                      nameRef.current = event.currentTarget.value;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-300"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="tel"
                    className="form-input w-full"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.currentTarget.value);
                      emailRef.current = event.currentTarget.value;
                    }}
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="w-full px-3">
                  <div className="mb-1 flex items-center justify-between">
                    <label
                      className="block text-sm font-medium text-gray-800 dark:text-gray-300"
                      htmlFor="message"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea w-full"
                    placeholder="Make sure to leave me a message!"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.currentTarget.value);
                      messageRef.current = event.currentTarget.value;
                    }}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn flex w-full items-center bg-blue-500 text-white hover:bg-blue-400"
                  >
                    <span>Send Message</span>
                    <svg
                      className="ml-2 mt-px h-3 w-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-current"
                        d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
