import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="relative py-20" id="contact">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
            Have a question or want to work together? Reach out to us.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 mt-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="mt-1 text-gray-700">Our friendly team is here to help.</p>
                <a href="mailto:info@slaam.org" className="mt-2 inline-block text-primary hover:underline">
                  info@slaam.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Call Us</h3>
                <p className="mt-1 text-gray-700">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+1234567890" className="mt-2 inline-block text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Visit Us</h3>
                <p className="mt-1 text-gray-700">Come say hello at our office.</p>
                <p className="mt-2 text-gray-700">
                  123 Business Avenue, Suite 100
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white/90 backdrop-blur-sm p-6 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
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
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
