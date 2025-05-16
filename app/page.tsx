import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MembersSection from "@/components/members-section"
import EventsSection from "@/components/events-section"
import GallerySection from "@/components/gallery-section"
import JoinSection from "@/components/join-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Hero background that remains fixed during scroll */}
      <div className="fixed inset-0 w-full h-full z-[-2]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/background-pattern.jpg')" }}
        />
      </div>

      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MembersSection />
        <EventsSection />
        <GallerySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  )
}
