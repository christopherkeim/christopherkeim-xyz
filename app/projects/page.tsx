import ProjectCard from "@/components/Projects/ProjectCard";
// import WidgetNewsletter from "@/components/widget-newsletter";
// import WidgetSponsor from "@/components/widget-sponsor";

import IconLight from "@/public/images/logo_light.svg";
import IconDark from "@/public/images/logo_dark.svg";

export const metadata = {
  title: "Projects - DevSpace",
  description: "Page description",
};

export default function Projects() {
  const items01 = [
    {
      id: 0,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "Container Tinkering",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: true,
    },
    {
      id: 0,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "Engine Prototypes",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: false,
    },
  ];

  const items02 = [
    {
      id: 0,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "PixelOkay",
      excerpt: "Code assets and services for people, with people.",
      openSource: false,
    },
    {
      id: 1,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "Storybook",
      excerpt: "Storybook helps you develop, test, and document UIs.",
      openSource: false,
    },
    {
      id: 2,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "Knowledge AI",
      excerpt:
        "Instantly answers all questions based on your internal knowledge bases.",
      openSource: false,
    },
    {
      id: 3,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "Security Frame",
      excerpt: "Automated security compliance for your business.",
      openSource: false,
    },
    {
      id: 4,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "KanbanOK",
      excerpt: "The most powerful kanban board ever invented.",
      openSource: false,
    },
    {
      id: 5,
      iconLight: IconLight,
      iconDark: IconDark,
      slug: "#0",
      title: "T Analytics",
      excerpt: "Make your Twitter analytics pretty and easy to share.",
      openSource: false,
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-32 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="w-full">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Side Hustles
                </h2>
                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {items01.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">
                  Client Projects
                </h2>
                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {items02.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      {/* <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
        </div>
      </aside> */}
    </div>
  );
}
