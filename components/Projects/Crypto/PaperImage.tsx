import Image from "next/image";

export function PaperImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <Image
      className="my-2 block rounded-sm shadow-md dark:shadow-sm dark:shadow-slate-600"
      src={src}
      width={768}
      height={432}
      priority
      alt={alt ?? ""}
    />
  );
}
