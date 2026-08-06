import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <div className="relative inline-flex">
      <span
        aria-hidden="true"
        className="absolute -inset-[6px] rounded-[14px] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--accent) 0%, var(--button-border-mid) 45%, var(--button-border-end) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1.5px",
        }}
      />
      <button
        className={`
          relative
          inline-flex
          items-center
          justify-center
          px-[24px]
          py-[14px]
          rounded-[8px]
          bg-(--accent)
          text-(--accent-foreground)
          font-extrabold
          whitespace-nowrap
          cursor-pointer
          transition-all
          duration-300
          ease-out
          hover:shadow-[0_0_32px_8px_color-mix(in_srgb,var(--accent)_55%,transparent)]
          active:scale-[0.97]
          focus-visible:outline
          focus-visible:outline-1
          focus-visible:outline-offset-1
          focus-visible:outline-(--accent)
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}