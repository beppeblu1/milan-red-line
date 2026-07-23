import { useId } from "react";

import {
  House,
  TrainFront,
} from "lucide-react";

type MarkerType = "apartment" | "metro" | "station";

type MarkerIconProps = {
  type: MarkerType;
  size?: number;
};

const MARKER_RED = "#dc2626";

const MARKER_PATH =
  "M24 2.5C13.5 2.5 5 11 5 21.5C5 36.5 24 61 24 61C24 61 43 36.5 43 21.5C43 11 34.5 2.5 24 2.5Z";

export default function MarkerIcon({
  type,
  size = 44,
}: MarkerIconProps) {
  const generatedId = useId().replace(/:/g, "");

  /*
   * `size` rappresenta la larghezza del marker.
   * L'altezza maggiore mantiene il pin slanciato.
   */
  const markerWidth = size;
  const markerHeight = size * 1.34;

  /*
   * Cerchio interno.
   * Leggermente rialzato per un migliore bilanciamento ottico.
   */
  const circleSize = size * 0.57;
  const circleTop = size * 0.22;

  /*
   * Dimensioni delle icone interne.
   */
  const symbolSize =
    type === "metro"
      ? size * 0.37
      : size * 0.41;

  /*
   * ID SVG univoci per evitare conflitti quando più marker
   * dello stesso tipo sono presenti nella stessa pagina.
   */
  const maskId = `marker-outline-mask-${generatedId}`;
  const fillGradientId = `marker-fill-gradient-${generatedId}`;
  const highlightGradientId = `marker-highlight-gradient-${generatedId}`;

  return (
    <span
      aria-hidden="true"
      className="relative inline-flex shrink-0"
      style={{
        width: markerWidth,
        height: markerHeight,
      }}
    >
      <svg
        viewBox="0 0 48 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 overflow-visible"
        style={{
          width: markerWidth,
          height: markerHeight,
          filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))",
        }}
      >
        <defs>
          {/*
           * Gradiente principale del riempimento:
           * bianco nella parte superiore e grigio chiarissimo
           * verso la punta del marker.
           */}
          <linearGradient
            id={fillGradientId}
            x1="24"
            y1="2.5"
            x2="24"
            y2="61"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor="#ffffff"
            />
            <stop
              offset="45%"
              stopColor="#fbfbfb"
            />
            <stop
              offset="100%"
              stopColor="#eceff3"
            />
          </linearGradient>

          {/*
           * Luce superiore molto delicata.
           */}
          <linearGradient
            id={highlightGradientId}
            x1="24"
            y1="2.5"
            x2="24"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor="#ffffff"
              stopOpacity="0.75"
            />
            <stop
              offset="100%"
              stopColor="#ffffff"
              stopOpacity="0"
            />
          </linearGradient>

          {/*
           * La maschera rimuove dal tratto bianco:
           * - l'intera area interna del marker;
           * - lo spazio occupato dal contorno rosso.
           *
           * Il bianco rimane quindi visibile esclusivamente
           * all'esterno del profilo rosso.
           */}
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="-10"
            y="-10"
            width="68"
            height="84"
          >
            <rect
              x="-10"
              y="-10"
              width="68"
              height="84"
              fill="white"
            />

            <path
              d={MARKER_PATH}
              fill="black"
              stroke="black"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </defs>

        {/* Riempimento bianco sfumato */}
        <path
          d={MARKER_PATH}
          fill={`url(#${fillGradientId})`}
        />

        {/* Highlight superiore leggerissimo */}
        <path
          d={MARKER_PATH}
          fill={`url(#${highlightGradientId})`}
          opacity="0.08"
        />

        {/* Contorno bianco esclusivamente esterno */}
        <path
          d={MARKER_PATH}
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask={`url(#${maskId})`}
        />

        {/* Contorno rosso invariato */}
        <path
          d={MARKER_PATH}
          stroke={MARKER_RED}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="absolute flex items-center justify-center rounded-full"
        style={{
          top: circleTop,
          left: "50%",
          width: circleSize,
          height: circleSize,
          backgroundColor: MARKER_RED,
          transform: "translateX(-50%)",
        }}
      >
        {type === "apartment" && (
          <House
            color="white"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: symbolSize,
              height: symbolSize,
            }}
          />
        )}

        {type === "metro" && (
          <span
            className="flex items-center justify-center font-bold leading-none text-white"
            style={{
              width: symbolSize,
              height: symbolSize,
              fontSize: size * 0.38,
              transform: "translateY(-0.02em)",
            }}
          >
            M
          </span>
        )}

        {type === "station" && (
          <TrainFront
            color="white"
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: symbolSize,
              height: symbolSize,
            }}
          />
        )}
      </span>
    </span>
  );
}