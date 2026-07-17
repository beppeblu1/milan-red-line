import Image from "next/image";

type GuidePanoramicImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function GuidePanoramicImage({
  src,
  alt,
  caption,
}: GuidePanoramicImageProps) {
  return (
    <figure className="mt-10">
      <div className="relative aspect-[16/5] overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
