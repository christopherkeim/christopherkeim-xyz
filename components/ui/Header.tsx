import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/ui/MobileMenu";

export function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Site branding */}
          <div className="mr-5 shrink-0">
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
                  className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/christopherkeim"
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Github
                </Link>
              </li>
            </ul>

            {/* Desktop lights switch */}
            <ThemeToggle className="ml-3" />

            {/* Desktop CTA on the right */}
            <ul className="flex flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/contact"
                  className="btn-sm ml-6 bg-blue-800 text-white hover:bg-blue-700"
                >
                  Get in touch
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
