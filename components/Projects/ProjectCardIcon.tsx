"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";

type ProjectCardIconProps = {
  iconDark: StaticImageData;
  iconLight: StaticImageData;
  title: string;
};
export function ProjectCardIcon({
  iconDark,
  iconLight,
  title,
}: ProjectCardIconProps) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative h-10 w-10 flex items-center justify-center mb-2">
      <Image
        src={resolvedTheme === "dark" ? iconDark : iconLight}
        fill
        alt={title}
        className="object-contain"
      />
    </div>
  );
}
