import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../data/navigation.js";
import useDarkMode from "../hooks/useDarkMode.js";

/** @param {{ logo: string, onLogoChange: (event: import("react").ChangeEvent<HTMLInputElement>) => void }} props */
export default function Header({ logo, onLogoChange }) {
  const [isDark, setIsDark] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12);

  useEffect(() => {
    const updateScrollState = () => {
      const nextState = window.scrollY > 12;
      setIsScrolled((currentState) => currentState === nextState ? currentState : nextState);
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <>
    
      <header className="site-header sticky top-0 z-40">
        <nav className={`site-nav mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 ${isScrolled ? "site-nav-scrolled" : ""}`} aria-label="Main navigation">
          <div className="brand-pill flex flex-1 items-center gap-3">
            <label className="logo-upload group" title="Change club logo">
              <img src={logo} alt="DSC logo" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
              <input type="file" accept="image/*" onChange={onLogoChange} aria-label="Upload a replacement logo" />
            </label>
            <span className="text-lg font-extrabold tracking-tight">DSC</span>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-7 md:flex">
            {navigationItems.map(({ label, to, icon: Icon }) => (
              <NavLink key={label} to={to} end={to === "/"} className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
                {({ isActive }) => <><span className={`nav-icon-pill ${isActive ? "nav-icon-pill-active" : ""}`}><Icon size={16} strokeWidth={isActive ? 2.3 : 1.9} /></span>{label}</>}
              </NavLink>
            ))}
          </div>

          <div className="header-actions flex flex-1 items-center justify-end gap-2 sm:gap-3">
            <button className="icon-button theme-toggle" type="button" onClick={() => setIsDark(!isDark)} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Light mode" : "Dark mode"}>
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <NavLink to="/contact" className="button-primary join-desktop">Join Us <ArrowUpRight size={16} /></NavLink>
          </div>
        </nav>
      </header>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navigationItems.map(({ label, to, icon: Icon }) => (
          <NavLink key={label} to={to} end={to === "/"} className={({ isActive }) => `mobile-nav-item ${isActive ? "mobile-nav-active" : ""}`}>
            {({ isActive }) => <><span className={`nav-icon-pill ${isActive ? "nav-icon-pill-active" : ""}`}><Icon size={18} strokeWidth={isActive ? 2.4 : 1.8} /></span><span>{label}</span></>}
          </NavLink>
        ))}
      </nav>
    </>
  );
}