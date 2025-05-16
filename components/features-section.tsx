import { Check, Zap, Shield, BarChart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="relative py-20" id="services">
      {/* Semi-transparent background that allows the hero image to show through */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Solutions</h2>
          <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
            We offer a wide range of services to help your business grow and succeed in today's competitive market.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {[
            {
              icon: <Zap className="h-10 w-10 text-primary" />,
              title: "Fast Performance",
              description: "Optimized solutions that ensure your systems run at peak efficiency.",
            },
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Secure & Reliable",
              description: "Built with security in mind to protect your valuable data and assets.",
            },
            {
              icon: <BarChart className="h-10 w-10 text-primary" />,
              title: "Analytics & Insights",
              description: "Gain valuable insights from your data to make informed business decisions.",
            },
            {
              icon: <Check className="h-10 w-10 text-primary" />,
              title: "Quality Assurance",
              description: "Rigorous testing ensures all deliverables meet the highest standards.",
            },
            {
              icon: <Zap className="h-10 w-10 text-primary" />,
              title: "Rapid Deployment",
              description: "Streamlined processes to get your solutions up and running quickly.",
            },
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Ongoing Support",
              description: "Dedicated support to ensure your systems continue to perform optimally.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
