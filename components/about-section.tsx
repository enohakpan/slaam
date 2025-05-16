import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative py-20" id="about">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl md:order-last">
            <Image
              src="/images/about-image.jpg"
              alt="SLAAM Community"
              width={800}
              height={800}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About SLAAM</div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Our Mission & Vision</h2>
            <p className="text-gray-300 md:text-lg/relaxed">
              Founded in 1986, the Sierra Leone Association of Artists and Musicians (SLAAM) is dedicated to promoting
              and preserving the rich cultural heritage of Sierra Leone through music, art, and performance. We provide
              a platform for artists and musicians to showcase their talents, collaborate, and contribute to the
              cultural development of our nation.
            </p>
            <ul className="grid gap-3">
              {[
                "Supporting artists and musicians across Sierra Leone",
                "Preserving traditional music and art forms",
                "Promoting Sierra Leonean culture globally",
                "Advocating for artists' rights and fair compensation",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-200">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-fit">Learn More About SLAAM</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
