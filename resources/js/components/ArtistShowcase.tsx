import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const artists = [
  {
    name: 'Awa Conteh',
    image: '/images/artists/artist1.png',
    title: 'Artist of the Year 2024',
    story: `Awa's unique fusion of ancestral patterns and modern aesthetics captivated the jury and fans alike. Her visual storytelling brought attention to Sierra Leonean heritage on a global scale.`,
    link: '/artists/awa-conteh',
  },
  {
    name: 'Sorie Kamara',
    image: '/images/artists/artist2.png',
    title: 'Artist of the Year 2023',
    story: `Sorie's Afrobeat innovations topped charts across West Africa. With bold rhythms and socially conscious lyrics, he became a voice for the youth.`,
    link: '/artists/sorie-kamara',
  },
  {
    name: 'Fatmata Jalloh',
    image: '/images/artists/artist3.png',
    title: 'Artist of the Year 2022',
    story: `Fatmata's groundbreaking performances and community workshops brought creative healing post-pandemic. She turned every show into an unforgettable cultural revival.`,
    link: '/artists/fatmata-jalloh',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ArtistShowcase = () => {
  return (
    <section className="relative z-30 bg-white overflow-hidden w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="w-full"
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col md:flex-row min-h-screen w-full">
              {/* Left Image Block */}
              <div className="relative w-full md:w-1/3 h-96 md:h-auto">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#4a19c1]/100 opacity-70" />
              </div>

              {/* Right Text Block */}
              <div className="w-full md:w-2/3 bg-gradient-to-r from-[#4a19c1]/100 via-[#4a19c1]/100 to-[#4a19c1] text-white px-8 md:px-20 py-16 flex flex-col justify-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0.2}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Artist of the Year Highlights
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                    {artist.name}
                  </h3>
                  <p className="text-lg text-indigo-200 font-medium mb-6">
                    {artist.title}
                  </p>
                  <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                    {artist.story}
                  </p>
                  <a
                    href={artist.link}
                    className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                  >
                    Read Full Story
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ArtistShowcase;
