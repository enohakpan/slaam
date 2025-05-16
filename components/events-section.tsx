import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsSection() {
  const events = [
    {
      title: "Annual SLAAM Music Festival",
      date: "June 15-17, 2025",
      time: "10:00 AM - 10:00 PM",
      location: "National Stadium, Freetown",
      description: "Our flagship event featuring performances from Sierra Leone's top musicians and artists.",
    },
    {
      title: "Traditional Music Workshop",
      date: "July 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "SLAAM Cultural Center, Bo",
      description: "Learn about traditional instruments and music styles from master musicians.",
    },
    {
      title: "Young Artists Exhibition",
      date: "August 12-15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "National Museum, Freetown",
      description: "Showcasing works from emerging visual artists under 25 years old.",
    },
    {
      title: "Music Industry Conference",
      date: "September 22-23, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Radisson Blu Hotel, Freetown",
      description: "Discussions on the future of Sierra Leone's music industry with international speakers.",
    },
  ]

  return (
    <section className="relative py-20" id="events">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Upcoming Events</div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Join Us at Our Events
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            SLAAM organizes concerts, exhibitions, workshops, and cultural events throughout the year across Sierra
            Leone.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/20"
            >
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{event.description}</p>
              <Button variant="ghost" className="mt-4 text-primary hover:text-primary hover:bg-white/10 p-0 h-auto">
                <span className="flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button>View All Events</Button>
        </div>
      </div>
    </section>
  )
}
