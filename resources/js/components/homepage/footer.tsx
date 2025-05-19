// Footer.tsx
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 text-sm z-20 relative">
      {/* Top Social Icons */}
      <div className="border-b border-white/10 py-6 flex justify-center gap-6">
        <a
          href="#"
          aria-label="Instagram"
          className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white transition"
        >
          <Instagram className="w-5 h-5 text-white group-hover:text-[#111] transition" />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white transition"
        >
          <Facebook className="w-5 h-5 text-white group-hover:text-[#111] transition" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white transition"
        >
          <Twitter className="w-5 h-5 text-white group-hover:text-[#111] transition" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white transition"
        >
          <Youtube className="w-5 h-5 text-white group-hover:text-[#111] transition" />
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About SLAAM</h3>
          <p className="text-sm leading-relaxed">
            The SLAAM Awards celebrate African excellence in music, arts, and culture. Learn more about our vision, mission, and impact.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Voting</a></li>
            <li><a href="#" className="hover:text-white transition">Honorees</a></li>
            <li><a href="#" className="hover:text-white transition">Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@slaam.org" className="hover:text-white transition">info@slaam.org</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a></li>
            <li>Location: <span>New York, USA</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} SLAAM Awards. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
