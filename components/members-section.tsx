import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Globe } from "lucide-react"

export default function MembersSection() {
  const members = [
    {
      name: "Amara Kamara",
      role: "Musician, SLAAM President",
      image: "/images/member-1.jpg",
      bio: "Award-winning musician with over 20 years of experience promoting Sierra Leonean music globally.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Fatmata Sesay",
      role: "Visual Artist, Vice President",
      image: "/images/member-2.jpg",
      bio: "Contemporary artist whose work has been exhibited across West Africa and Europe.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Ibrahim Koroma",
      role: "Traditional Musician",
      image: "/images/member-3.jpg",
      bio: "Master of traditional instruments preserving Sierra Leone's musical heritage.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Mariama Jalloh",
      role: "Painter & Sculptor",
      image: "/images/member-4.jpg",
      bio: "Innovative artist combining traditional techniques with contemporary themes.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#",
      },
    },
  ]

  return (
    <section className="relative py-20" id="members">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Members</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Artists & Musicians</h2>
          <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
            SLAAM represents hundreds of talented artists and musicians across Sierra Leone. Meet some of our
            distinguished members.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a href={member.social.instagram} className="text-gray-400 hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.website} className="text-gray-400 hover:text-primary transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button>View All Members</Button>
        </div>
      </div>
    </section>
  )
}
