import React from 'react';

const artists = [
  { id: 1, name: 'Artist One', image: '/images/hero-1.jpeg' },
  { id: 2, name: 'Artist Two', image: '/images/hero-1.jpeg' },
  { id: 3, name: 'Artist Three', image: '/images/hero-1.jpeg' },
  { id: 4, name: 'Artist Four', image: '/images/hero-1.jpeg' },
  { id: 5, name: 'Artist Five', image: '/images/hero-1.jpeg' },
];

const Artists = () => {
  return (
    <div
      className="relative z-100 overflow-hidden whitespace-nowrap py-8"
      style={{ backgroundColor: '#100d2a' }}
    >
      {/* Top Gradient Fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px', // Increase for smoother fade
          background: 'linear-gradient(to bottom, transparent, #100d2a)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      ></div>

      <h1
        className="text-2xl md:text-4xl font-bold text-center mb-6 relative z-10"
        style={{ color: '#7f5821' }}
      >
        OUR ARTISTS
      </h1>

      <div className="inline-flex animate-scrollLeft relative z-10">
        {[...artists, ...artists].map((artist, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 mx-4"
            title={artist.name}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-2 text-white font-semibold">{artist.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollLeft {
          animation: scrollLeft 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Artists;
