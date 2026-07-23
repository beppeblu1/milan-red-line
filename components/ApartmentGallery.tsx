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
  const [selectedImage, setSelectedImage] = useState<string | null>(
    images[0] ?? null
  );
  const [failedImages, setFailedImages] = useState<Set<string>>(
    () => new Set()
  );

  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const availableImages = images.filter(
    (image) => !failedImages.has(image)
  );

  const activeImage =
    selectedImage && availableImages.includes(selectedImage)
      ? selectedImage
      : availableImages[0] ?? null;

  const selectedIndex = activeImage
    ? availableImages.indexOf(activeImage)
    : -1;

  const handleImageError = (failedImage: string) => {
    if (failedImages.has(failedImage)) {
      return;
    }

    if (failedImage === activeImage) {
      const failedIndex = availableImages.indexOf(failedImage);
      const remainingImages = availableImages.filter(
        (image) => image !== failedImage
      );

      const nextImage =
        remainingImages[failedIndex] ??
        remainingImages[failedIndex - 1] ??
        remainingImages[0] ??
        null;

      setSelectedImage(nextImage);
    }

    setFailedImages((current) => {
      const updated = new Set(current);
      updated.add(failedImage);

      return updated;
    });
  };

  const previousImage = () => {
    if (availableImages.length <= 1 || selectedIndex < 0) {
      return;
    }

    const previousIndex =
      selectedIndex === 0
        ? availableImages.length - 1
        : selectedIndex - 1;

    setSelectedImage(availableImages[previousIndex]);
  };

  const nextImage = () => {
    if (availableImages.length <= 1 || selectedIndex < 0) {
      return;
    }

    const nextIndex =
      selectedIndex === availableImages.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedImage(availableImages[nextIndex]);
  };

  useEffect(() => {
    if (selectedIndex < 0) {
      return;
    }

    const thumbnail = thumbnailsRef.current?.children[
      selectedIndex
    ] as HTMLElement | undefined;

    thumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [selectedIndex]);

  if (!activeImage) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-100 shadow-lg">
        <Image
          src={activeImage}
          alt={`${title} apartment`}
          width={1600}
          height={900}
          className="h-[420px] w-full object-cover md:h-[500px]"
          priority
          onError={() => handleImageError(activeImage)}
        />

        {availableImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow transition hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow transition hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {availableImages.length > 1 && (
        <div
          ref={thumbnailsRef}
          className="mt-6 flex gap-3 overflow-hidden"
        >
          {availableImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`View image ${index + 1} of ${title}`}
              className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
                activeImage === image
                  ? "border-red-600"
                  : "border-transparent hover:border-zinc-300"
              }`}
            >
              <Image
                src={image}
                alt={`${title} apartment — image ${index + 1}`}
                width={180}
                height={120}
                className="h-24 w-36 object-cover"
                onError={() => handleImageError(image)}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}