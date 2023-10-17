import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/ui/MobileMenu";

export function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link
              href="/"
              className="block"
              aria-label="Crypto Real Time Inference"
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="projects"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  My Work
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/christopherkeim"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  My Github
                </Link>
              </li>
            </ul>

            {/* Desktop lights switch */}
            <ThemeToggle className="ml-3" />

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/contact"
                  className="btn-sm text-white bg-blue-800 hover:bg-blue-700 ml-6"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
