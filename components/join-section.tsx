import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"

export default function JoinSection() {
  return (
    <section className="relative py-20" id="join">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Join SLAAM</div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Become a Member</h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Join our community of artists and musicians to access resources, opportunities, and a supportive network.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 mt-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white">Membership Benefits</h3>
            <ul className="space-y-4">
              {[
                "Access to SLAAM's recording studio and rehearsal spaces",
                "Opportunities to perform at SLAAM-organized events",
                "Professional development workshops and masterclasses",
                "Networking with local and international artists",
                "Representation in advocacy for artists' rights",
                "Promotion of your work through SLAAM's platforms",
                "Eligibility for grants and funding opportunities",
                "Discounted rates for music and art equipment",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-200">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-white mb-2">Membership Categories</h4>
              <div className="space-y-3">
                <div className="rounded-lg bg-white/10 p-4">
                  <h5 className="font-semibold text-white">Full Member</h5>
                  <p className="text-gray-300 mt-1">For professional artists and musicians</p>
                  <p className="text-primary font-medium mt-2">Le 500,000 per year</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <h5 className="font-semibold text-white">Associate Member</h5>
                  <p className="text-gray-300 mt-1">For emerging artists and students</p>
                  <p className="text-primary font-medium mt-2">Le 250,000 per year</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <h5 className="font-semibold text-white">Supporter</h5>
                  <p className="text-gray-300 mt-1">For art enthusiasts and patrons</p>
                  <p className="text-primary font-medium mt-2">Le 350,000 per year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-white/90 backdrop-blur-sm p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Membership Application</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+232 XX XXX XXX" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="membership-type"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Membership Type
                  </label>
                  <select
                    id="membership-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select membership type</option>
                    <option value="full">Full Member</option>
                    <option value="associate">Associate Member</option>
                    <option value="supporter">Supporter</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="artistic-discipline"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Artistic Discipline
                </label>
                <select
                  id="artistic-discipline"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select your primary discipline</option>
                  <option value="music-vocal">Music - Vocal</option>
                  <option value="music-instrumental">Music - Instrumental</option>
                  <option value="painting">Painting</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="photography">Photography</option>
                  <option value="dance">Dance</option>
                  <option value="theater">Theater</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="bio"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Brief Bio
                </label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your artistic background and interests..."
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
