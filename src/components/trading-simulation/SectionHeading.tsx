interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}