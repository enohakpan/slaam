import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Annual Music Festival",
      category: "Performance",
      image: "/images/gallery-1.jpg",
    },
    {
      title: "Traditional Dance",
      category: "Cultural",
      image: "/images/gallery-2.jpg",
    },
    {
      title: "Art Exhibition",
      category: "Visual Arts",
      image: "/images/gallery-3.jpg",
    },
    {
      title: "Youth Workshop",
      category: "Education",
      image: "/images/gallery-4.jpg",
    },
    {
      title: "Recording Session",
      category: "Music",
      image: "/images/gallery-5.jpg",
    },
    {
      title: "Community Outreach",
      category: "Engagement",
      image: "/images/gallery-6.jpg",
    },
  ]

  return (
    <section className="relative py-20" id="gallery">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Gallery</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Creative Journey</h2>
          <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
            Explore moments from our performances, exhibitions, and community activities across Sierra Leone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 text-sm font-medium text-primary">{item.category}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <Button variant="outline" size="sm" className="mt-4 text-white border-white hover:bg-white/10">
                  View Larger
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="group">
            View Full Gallery
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
