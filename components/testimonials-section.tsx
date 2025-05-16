import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="relative py-20">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {[
            {
              name: "Alex Johnson",
              role: "CEO, TechCorp",
              image: "/images/testimonial-1.jpg",
              content:
                "Working with this team has been transformative for our business. Their innovative solutions have helped us streamline operations and increase revenue.",
            },
            {
              name: "Sarah Williams",
              role: "Marketing Director, GrowthCo",
              image: "/images/testimonial-2.jpg",
              content:
                "The level of expertise and dedication is unmatched. They truly understand our needs and deliver solutions that exceed our expectations every time.",
            },
            {
              name: "Michael Chen",
              role: "CTO, InnovateTech",
              image: "/images/testimonial-3.jpg",
              content:
                "Their technical knowledge and problem-solving abilities are impressive. They've become an invaluable partner in our digital transformation journey.",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                </div>
                <p className="mb-6 text-gray-700">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg?height=100&width=100"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
