"use client";
import ThemeToggle from "./ThemeToggle";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const NAV_LINKS = [
  { id: "services", href: "/#services", label: "Services" },
  { id: "lemvestAI", href: "/#lemvestAI", label: "LemvestAI" },
  { id: "faq", href: "/#faq", label: "FAQ" },
  { id: "ambassador", href: "/#ambassador", label: "Ambassador" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
       }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-black/40 backdrop-blur-xl border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      }`}
    >

      <div className="flex w-full items-center justify-between xl:px-10 md:px-6 px-4 max-w-[1400px] mx-auto">
        {/* Logo */}
<div className="flex items-center">
  {/* Desktop logo — dark mode: sirf md+ AND dark, ek hi compound rule */}
  <Image
    src="/logo-b.webp"
    alt="Logo"
    width={157}
    height={35}
    className="hidden dark:md:block"
  />
  {/* Desktop logo — light mode: sirf md+ AND light, ek hi compound rule */}
  <Image
    src="/logo-w.webp"
    alt="Logo"
    width={157}
    height={35}
    className="hidden light:md:block"
  />

  {/* Mobile logo — dark mode: sirf md se neeche AND dark */}
  <Image
    src="/logo-mob.webp"
    alt="Logo"
    width={80}
    height={80}
    className="hidden dark:max-md:block"
  />

  {/* Mobile logo — light mode: sirf md se neeche AND light */}
  <Image
    src="/logo-mob-light.webp"
    alt="Logo"
    width={80}
    height={80}
    className="hidden light:max-md:block"
  />
</div>
        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`
                  rounded-full px-5 py-2 text-[16px] font-normal
                  transition-all duration-300
                  ${
                    activeSection === link.id
                      ? "text-(--accent)"
                      : "text-black dark:text-white hover:text-(--accent)"
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger — together in the main row, all screen sizes */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme toggle — desktop/tablet only, moves into the mobile menu below lg */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <Button className="">Join for free</Button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — links + theme toggle, no duplicate CTA button */}
      <div
        className={`
          absolute left-0 right-0 top-full z-[60] mx-5
          overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black
          transition-all duration-300 ease-in-out lg:hidden
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-auto flex max-w-[1250px] flex-col gap-2 px-5 pt-4 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                rounded-full px-5 py-3 text-center text-[16px] font-medium
                transition-all duration-300
                ${
                  activeSection === link.id
                    ? "bg-(--accent) text-(--accent-foreground)"
                    : "text-black dark:text-white hover:bg-(--accent)/10"
                }
              `}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle lives inside the mobile menu, right where the hamburger starts */}
          <div className="mt-2 flex justify-center border-t border-black/10 dark:border-white/10 pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;