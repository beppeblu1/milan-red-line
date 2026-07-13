"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ApartmentGalleryProps = {
  images: string[];
  title: string;
};

export default function ApartmentGallery({
  images,
  title,
}: ApartmentGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const selectedImage = images[selectedIndex];

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const thumbnail = thumbnailsRef.current?.children[
      selectedIndex
    ] as HTMLElement | undefined;

    thumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedIndex]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-lg">
        <Image
          src={selectedImage}
          alt={title}
          width={1600}
          height={900}
          className="h-[420px] w-full object-cover md:h-[500px]"
          priority
        />

        {/* Previous */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow transition hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow transition hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div
        ref={thumbnailsRef}
        className="mt-6 flex gap-3 overflow-hidden"
      >
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
              selectedIndex === index
                ? "border-red-600"
                : "border-transparent hover:border-zinc-300"
            }`}
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              width={180}
              height={120}
              className="h-24 w-36 object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}