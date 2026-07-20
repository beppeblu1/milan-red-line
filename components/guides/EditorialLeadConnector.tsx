export default function EditorialLeadConnector() {
  return (
    <span
      className="mr-4 inline-flex align-middle md:mr-5"
      aria-hidden="true"
    >
      {/* Small decorative SVG. Using <img> intentionally instead of next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ui/editorial-lead-connector.svg"
        alt=""
        className="h-[18px] w-auto md:h-5"
        draggable="false"
      />
    </span>
  );
}