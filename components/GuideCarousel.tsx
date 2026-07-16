"use client";

import Link from "next/link";
import { useRef } from "react";

import type { GuideMetadata } from "@/lib/guides";

type GuideCarouselProps = {
  guides: GuideMetadata[];
};

export default function GuideCarousel({
  guides,
}: GuideCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector<HTMLElement>("[data-guide-card]");
    const cardWidth = firstCard?.offsetWidth ?? carousel.clientWidth;
    const gap = 24;

    carousel.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  }

  if (guides.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-12">
      {/* Left gradient */}
      <div className="pointer-events-none absolute -left-6 bottom-0 top-0 z-[5] hidden w-28 bg-gradient-to-r from-white via-white/90 to-transparent lg:block" />

      {/* Right gradient */}
      <div className="pointer-events-none absolute -right-6 bottom-0 top-0 z-[5] hidden w-28 bg-gradient-to-l from-white via-white/90 to-transparent lg:block" />

      {/* Previous button */}
      <button
        type="button"
        onClick={() => scrollCarousel("previous")}
        aria-label="Previous guides"
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-red-500 hover:text-red-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 lg:flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
        >
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Guide cards */}
      <div
        ref={carouselRef}
        className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
      >
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            data-guide-card
            href={`/guides/${guide.slug}`}
            className="group flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-7 text-left transition hover:border-red-400 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 sm:w-[60%] lg:w-[calc((100%_-_3rem)/3)]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
                Local guide
              </span>

              <span className="text-sm text-zinc-500">
                {guide.readingTime}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-900">
              {guide.title}
            </h3>

            <p className="mt-4 line-clamp-3 leading-7 text-zinc-600">
              {guide.description}
            </p>

            <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-red-600 transition group-hover:gap-3 group-hover:text-red-700">
              Continue reading
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={() => scrollCarousel("next")}
        aria-label="Next guides"
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:border-red-500 hover:text-red-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 lg:flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mobile controls */}
      <div className="mt-3 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => scrollCarousel("previous")}
          aria-label="Previous guides"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-red-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => scrollCarousel("next")}
          aria-label="Next guides"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-red-500 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}