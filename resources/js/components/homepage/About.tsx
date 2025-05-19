import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white relative z-30 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About SLAAM
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Sierra Leone Association of Artists and Musicians (SLAAM) is a 501(c)(3) nonprofit trade organization
            committed to empowering Sierra Leonean creatives. Our mission is to provide the visibility, resources, and
            global platform necessary for artists and musicians to thrive in the competitive U.S. and international scenes.
          </p>
          <a
            href="/about"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/images/hero.jpeg"
            alt="About SLAAM"
            className="w-full max-w-sm rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
