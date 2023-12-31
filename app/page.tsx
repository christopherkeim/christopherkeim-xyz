export const metadata = {
  title: "About - Christopher Keim",
  description: "About page for Software Engineer Christopher Keim",
};

import Image from "next/image";
import ChristopherKeim from "@/public/images/christopher_keim.jpg";
import { FadeAnimation } from "@/components/ui/FadeAnimation";
import { Education } from "@/components/Home/Education";
import { Experience } from "@/components/Home/Experience";
import { WidgetSkills } from "@/components/Widgets/WidgetSkills";
import { WidgetCertifications } from "@/components/Widgets/WidgetCertifications";

export default function About() {
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
                  <FadeAnimation>
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
                      Software Engineer and Published Neuroscience Researcher
                    </h3>
                  </FadeAnimation>
                  {/* Page content */}
                  <div className="space-y-12 text-slate-500 dark:text-slate-400">
                    <FadeAnimation>
                      <Education />
                    </FadeAnimation>
                    <FadeAnimation>
                      <Experience />
                    </FadeAnimation>
                  </div>
                </section>
              </div>
            </div>

            {/* Right sidebar */}
            <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
              <div className="space-y-6">
                <FadeAnimation fadeDelay={200}>
                  <WidgetSkills />
                </FadeAnimation>
                <FadeAnimation fadeDelay={400}>
                  <WidgetCertifications />
                </FadeAnimation>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
