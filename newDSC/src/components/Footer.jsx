import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationItems } from "../data/navigation.js";

/** @param {{ logo: string }} props */
export default function Footer({ logo }) {
  return (
    <footer id="contact" className="site-footer mt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DSC logo" className="h-10 w-10 object-contain" />
          <span className="text-lg font-extrabold">DSC</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer navigation">
          {navigationItems.map(({ label, to }) => <Link key={label} className="footer-link" to={to}>{label}</Link>)}
        </nav>
        <div className="flex gap-2">
          <a className="icon-button" href="https://www.instagram.com/sanjivani.dsc?stkn=bzVkaHh6Y3EwY291" aria-label="Instagram"><Instagram size={18} /></a>
          <Link className="icon-button" to="/contact" aria-label="Social media"><ArrowUpRight size={18} /></Link>
        </div>
        <p className="text-xs text-muted md:hidden">© 2024 Developer Student Club. All rights reserved.</p>
      </div>
      <div className="footer-bottom px-5 py-5 text-center text-xs text-muted">© 2024 Developer Student Club. All rights reserved.</div>
    </footer>
  );
}