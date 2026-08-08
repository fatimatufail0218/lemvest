interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-[30px] max-w-[215px] md:max-w-[360px] lg:max-w-[500px] mx-auto leading-none font-medium text-black dark:text-white md:text-[38px] xl:text-[52px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-[320px] md:max-w-[400px] lg:max-w-[460px] lg:px-1 mx-auto text-[9px] md:text-[12px] xl:text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      )}
      
    </div>
  );
}