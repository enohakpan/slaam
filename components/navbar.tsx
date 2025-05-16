"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image src="/images/slaam-logo.png" alt="SLAAM Logo" width={40} height={40} className="object-contain" />
          </div>
          <span
            className={`text-2xl font-bold tracking-tighter transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            SLAAM
          </span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "#about" },
            { name: "Members", href: "#members" },
            { name: "Events", href: "#events" },
            { name: "Gallery", href: "#gallery" },
            { name: "Join Us", href: "#join" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className={scrolled ? "" : "text-white hover:bg-white/10"}>
            Login
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Become a Member
          </Button>
        </div>
        <button className="md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
          <div className="container h-full mx-auto px-4 py-20">
            <nav className="flex flex-col gap-6 items-center justify-center h-full">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "#about" },
                { name: "Members", href: "#members" },
                { name: "Events", href: "#events" },
                { name: "Gallery", href: "#gallery" },
                { name: "Join Us", href: "#join" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-white transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
                <Button variant="outline" size="lg" className="w-full text-white border-white hover:bg-white/10">
                  Login
                </Button>
                <Button size="lg" className="w-full">
                  Become a Member
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
