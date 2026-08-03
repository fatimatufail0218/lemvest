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
      {/* detached gradient ring — replicates outline + outline-offset, but with gradient support */}
      <span
        aria-hidden="true"
        className="absolute -inset-[6px] rounded-[14px] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #6AFFBD 0%, #6E6E6E 45%, #0A0A0A 100%)",
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
          bg-[#6AFFBD]
          text-black
          font-extrabold
          whitespace-nowrap
          transition-all
          duration-300
          ease-out
          hover:shadow-[0_0_32px_8px_rgba(106,255,189,0.55)]
          active:scale-[0.97]
          focus-visible:outline
          focus-visible:outline-1
          focus-visible:outline-offset-1
          focus-visible:outline-[#6AFFBD]
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}