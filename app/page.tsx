export const metadata = {
  title: "About - Christopher Keim",
  description: "About page for Software Engineer Christopher Keim",
};

import Image from "next/image";
import Link from "next/link";
import ChristopherKeim from "@/public/images/christopher_keim.jpg";
import { About } from "@/components/Home/About";
import { WidgetSkills } from "@/components/Widgets/WidgetSkills";
import { WidgetCertifications } from "@/components/Widgets/WidgetCertifications";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 ">
          <div className="grow space-y-8 pb-16 pt-12 md:flex md:space-x-8 md:space-y-0 md:pb-20 md:pt-16">
            {/* Middle area */}
            <div className="grow">
              <div className="max-w-[700px]">
                <section>
                  {/* Page title */}
                  <div className="mb-4 flex flex-col items-center justify-start sm:flex-row">
                    <Image
                      src={ChristopherKeim}
                      alt="Christopher Keim"
                      width={300}
                      height={300}
                      className="h-80 w-80 rounded-full object-cover sm:h-28 sm:w-28"
                    />
                    <h2 className="text-3xl font-bold sm:ml-4 sm:text-4xl">
                      Christopher Keim
                    </h2>
                  </div>
                  <h3 className="h4 mb-12">
                    Software Engineer | Data Scientist
                  </h3>
                  {/* Page content */}
                  <div className="space-y-12 text-slate-500 dark:text-slate-400">
                    <About />
                    <div className="flex justify-center p-1 align-middle">
                      <Link
                        href="/projects/crypto"
                        // className="btn-sm ml-6 bg-blue-800 text-white hover:bg-blue-700"
                        className="my-2 inline-flex w-80 items-center justify-center rounded border border-transparent bg-green-500 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-green-400"
                      >
                        Try ML in your browser
                      </Link>
                    </div>
                    <div className="flex justify-center p-1 align-middle">
                      <Link
                        href="/contact"
                        // className="btn-sm ml-6 bg-blue-800 text-white hover:bg-blue-700"
                        className="my-2 inline-flex w-80 items-center justify-center rounded border border-transparent bg-blue-500 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-400"
                      >
                        Get in touch
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
              <div className="space-y-6">
                <WidgetSkills />
                <WidgetCertifications />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
