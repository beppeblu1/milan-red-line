"use client";

import dynamic from "next/dynamic";

const ApartmentMap = dynamic(
  () => import("./ApartmentMap"),
  {
    ssr: false,
  }
);

export default ApartmentMap;