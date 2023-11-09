import Image from "next/image";

export function PaperImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative w-full">
      <Image
        className="my-2 block w-full rounded-sm object-contain shadow-md dark:shadow-sm dark:shadow-slate-600"
        src={src}
        fill
        priority
        alt={alt ?? ""}
      />
    </div>
  );
}
