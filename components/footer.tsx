import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-gray-300">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-md"></div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden">
                <Image
                  src="/images/slaam-logo.png"
                  alt="SLAAM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">SLAAM</span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-400">
              Sierra Leone Association of Artists and Musicians - Uniting creative voices to preserve and promote our
              cultural heritage.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About SLAAM
                </Link>
              </li>
              <li>
                <Link href="#members" className="text-gray-400 hover:text-white transition-colors">
                  Our Members
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#join" className="text-gray-400 hover:text-white transition-colors">
                  Join SLAAM
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Artist Directory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Music Archive
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Grants & Funding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Educational Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Industry Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">
                  SLAAM Headquarters
                  <br />
                  25 Siaka Stevens Street
                  <br />
                  Freetown, Sierra Leone
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+23276123456" className="text-gray-400 hover:text-white transition-colors">
                  +232 76 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@slaam.org" className="text-gray-400 hover:text-white transition-colors">
                  info@slaam.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sierra Leone Association of Artists and Musicians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
