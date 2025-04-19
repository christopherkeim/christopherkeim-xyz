import Link from "next/link";
import { StaticImageData } from "next/image";
import { ProjectCardIcon } from "./ProjectCardIcon";

interface Item {
  id: string;
  iconLight: StaticImageData;
  iconDark: StaticImageData;
  link?: string;
  demoLink?: string;
  title: string;
  excerpt: string;
}

interface ItemProps {
  item: Item;
}

export default function ProjectCard({ item }: ItemProps) {
  return (
    <div className="transition-color rounded-lg border border-slate-200 p-5 ease-in-out hover:border-slate-300 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 dark:hover:border-slate-700">
      <div className="flex h-full flex-col">
        <div className="grow">
          <div className="flex items-center justify-between space-x-2">
            <ProjectCardIcon
              iconDark={item.iconDark}
              iconLight={item.iconLight}
              title={item.title}
            />
            <div className="flex gap-2">
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <div className="group inline-flex h-5 items-center rounded-full bg-blue-100 px-2 text-center text-xs font-medium text-blue-600">
                    Code &nbsp;
                    <div className="flex justify-end text-blue-500">
                      <svg
                        className="-rotate-45 fill-current transition-transform ease-out group-hover:rotate-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                      >
                        <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}
              {item.demoLink && (
                <Link
                  href={item.demoLink}
                  target={item.demoLink.startsWith("/") ? "_self" : "_blank"}
                  referrerPolicy="no-referrer"
                >
                  <div className="group inline-flex h-5 items-center rounded-full bg-green-100 px-2 text-center text-xs font-medium text-green-600">
                    App &nbsp;
                    <div className="flex justify-end text-green-500">
                      <svg
                        className="-rotate-45 fill-current transition-transform ease-out group-hover:rotate-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                      >
                        <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className="font-aspekta mb-1 text-lg font-[650]">
            {item.title}
          </div>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            {item.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
