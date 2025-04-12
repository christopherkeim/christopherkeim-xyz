"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="inline-flex md:hidden">
      {/* Mobile lights switch */}
      <ThemeToggle className="mr-6" />

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-gray-900 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="no-scrollbar fixed left-0 top-0 z-20 -ml-16 h-screen w-full max-w-sm overflow-scroll bg-white shadow-lg dark:bg-gray-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -tranblue-x-full"
          enterTo="opacity-100 tranblue-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="py-6 pl-20 pr-4">
            {/* Logo */}
            <Link
              href="/"
              className="mb-4 inline-block"
              aria-label="Crypto Real Time Inference"
              onClick={() => setMobileNavOpen(false)}
            >
              <Logo />
            </Link>
            {/* Links */}
            <ul>
              <li>
                <Link
                  href="/"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/christopherkeim"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="my-2 inline-flex w-full items-center justify-center rounded border border-transparent bg-blue-500 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-400"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
