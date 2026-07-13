"use client";

import { useState } from "react";
import Image from "next/image";

type ApartmentGalleryProps = {
  images: string[];
  title: string;
};

export default function ApartmentGallery({
  images,
  title,
}: ApartmentGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <Image
        src={selectedImage}
        alt={title}
        width={1600}
        height={900}
        className="h-[500px] w-full rounded-3xl object-cover shadow-lg"
        priority
      />

      <div className="mt-6 grid grid-cols-5 gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-red-600"
                : "border-transparent hover:border-zinc-300"
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={300}
              height={200}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}