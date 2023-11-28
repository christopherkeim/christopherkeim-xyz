"use client";
import { useState } from "react";

type ValidationErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  function validateForm() {
    const errors: ValidationErrors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.length < 60) {
      errors.message = "Message must be at least 60 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formIsValid = validateForm();

    if (formIsValid) {
      setSubmitting(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });
        if (response.ok) setSubmitted(true);
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
        setSubmitted(false);
      }
    }
  }
  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Page header */}
            <div className="mx-auto max-w-3xl pb-8 text-center">
              <h1 className="h1 mb-4">Get in touch</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Just fill out this short form and I&apos;ll get back to you!
              </p>
            </div>

            {/* Contact form */}
            <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="w-full px-3">
                  <div className="mb-1 flex items-center justify-between">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-300"
                      htmlFor="name"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    {errors.name && (
                      <span className="text-sm text-red-600">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => {
                      setName(event.currentTarget.value);
                    }}
                  />
                </div>
              </div>
              <div className="-mx-3 mb-5 flex flex-wrap">
                <div className="w-full px-3">
                  <div className="mb-1 flex items-center justify-between">
                    <label
                      className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    {errors.email && (
                      <span className="text-sm text-red-600">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <input
                    id="email"
                    type="tel"
                    className="form-input w-full"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.currentTarget.value);
                    }}
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
                    {errors.message && (
                      <span className="text-sm text-red-600">
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea w-full"
                    placeholder="Make sure to leave me a message!"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.currentTarget.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  {!submitted && (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn flex w-full items-center bg-blue-500 text-white hover:bg-blue-400 disabled:bg-gray-300 disabled:text-gray-800"
                    >
                      <span>{submitting ? "Submitting" : "Send Message"}</span>
                      {submitting ? (
                        <>
                          {" "}
                          <svg
                            aria-hidden="true"
                            className="ms-2 h-5 w-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-900"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Submitting...</span>
                        </>
                      ) : (
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
                      )}
                    </button>
                  )}
                  {submitted && (
                    <h2 className="h4 text-center text-green-500">
                      Message sent successfully!
                    </h2>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
