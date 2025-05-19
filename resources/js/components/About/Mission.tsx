const Mission = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row-reverse">
      {/* Image Section with Fade Overlay */}
      <div className="relative w-full md:w-1/3 h-64 md:h-full">
        <img
          src="/images/stage.png"
          alt="Our Mission"
          className="w-full h-full object-cover"
        />
        {/* Top Fade Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0d0a08]/70 via-[#0d0a08]/70 to-[#0d0a08]/40 pointer-events-none" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 bg-white text-black flex items-center justify-center px-8 py-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At SLAAM, our mission is to recognize and uplift African talent by celebrating achievements in arts, culture, and music. We strive to amplify African voices and inspire the next generation through impactful storytelling and community empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
