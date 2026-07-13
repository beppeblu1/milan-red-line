type MarkerType = "apartment" | "metro" | "station";

type Props = {
  type: MarkerType;
  size?: number;
};

export default function MarkerIcon({
  type,
  size = 42,
}: Props) {
  const colors = {
    apartment: "#2563eb", // blu
    metro: "#dc2626", // rosso M1
    station: "#52525b", // grigio
  };

  const color = colors[type];

  return (
    <svg
      width={size}
      height={(size * 56) / 40}
      viewBox="0 0 40 56"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,.25))",
      }}
    >
      {/* Marker */}
      <path
        d="M20 2
           C10 2 2 10 2 20
           C2 33 20 54 20 54
           C20 54 38 33 38 20
           C38 10 30 2 20 2Z"
        fill={color}
        stroke="white"
        strokeWidth="2"
      />

      {/* Cerchio bianco */}
      <circle
        cx="20"
        cy="20"
        r="10"
        fill="white"
      />

      {/* Apartment */}
      {type === "apartment" && (
        <>
          <path
            d="M14 21 L20 15 L26 21"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="15.5"
            y="21"
            width="9"
            height="7"
            rx="1"
            fill={color}
          />
          <rect
            x="19"
            y="23"
            width="2"
            height="5"
            fill="white"
          />
        </>
      )}

      {/* Metro */}
      {type === "metro" && (
        <text
          x="20"
          y="25"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill={color}
          fontFamily="Arial, sans-serif"
        >
          M
        </text>
      )}

      {/* Station */}
      {type === "station" && (
        <>
          <rect
            x="15"
            y="18"
            width="10"
            height="7"
            rx="2"
            fill={color}
          />
          <rect
            x="17"
            y="20"
            width="2"
            height="2"
            fill="white"
          />
          <rect
            x="21"
            y="20"
            width="2"
            height="2"
            fill="white"
          />
          <rect
            x="17"
            y="26"
            width="6"
            height="1.8"
            fill={color}
          />
        </>
      )}
    </svg>
  );
}