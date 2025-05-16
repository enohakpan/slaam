import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Mic, PenTool } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              <span className="text-white text-sm font-medium">Sierra Leone Association of Artists and Musicians</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Celebrating Sierra Leone's <span className="text-primary">Creative Voices</span>
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Uniting artists and musicians to preserve, promote, and develop Sierra Leone's rich cultural heritage
              through music and art.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="group bg-primary hover:bg-primary/90">
                Join SLAAM
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Our Work
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-video max-w-xl overflow-hidden rounded-xl shadow-2xl md:ml-auto">
            <Image
              src="/images/hero-content.jpg"
              alt="Sierra Leone Musicians Performing"
              width={1280}
              height={720}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary p-2">
                  <Mic className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium">Music</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary p-2">
                  <PenTool className="h-4 w-4 text-white" />
                </div>
                <span className="text-white text-sm font-medium">Art</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
