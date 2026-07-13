type SectionTitleProps = {
    badge?: string;
    title: string;
    subtitle?: string;
  };
  
  export default function SectionTitle({
    badge,
    title,
    subtitle,
  }: SectionTitleProps) {
    return (
      <div className="max-w-2xl">
        {badge && (
          <div className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
            {badge}
          </div>
        )}
  
        <h1 className="mt-6 text-5xl font-bold text-zinc-900">
          {title}
        </h1>
  
        {subtitle && (
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {subtitle}
          </p>
        )}
      </div>
    );
  }