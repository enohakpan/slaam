import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'Empowering Creative Minds',
    subtitle: 'Join the movement to celebrate and elevate talent with modern design and tech.',
    bg: '/images/hero-1.jpeg',
  },
  {
    title: 'Design Without Limits',
    subtitle: 'Unleash your full potential with artistic freedom and bold expression.',
    bg: '/images/hero-2.jpeg',
  },
  {
    title: 'Crafting Visual Excellence',
    subtitle: 'Every detail counts. Build beautiful, functional experiences.',
    bg: '/images/hero-3.jpeg',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgPositionY, setBgPositionY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate how much hero is scrolled out of viewport (0 to windowHeight)
          const scrollProgress = Math.min(Math.max(-rect.top, 0), windowHeight);

          // Parallax factor - adjust multiplier to change speed
          const parallaxY = scrollProgress * 0.5;

          setBgPositionY(parallaxY);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, delay: 0.4, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fixed background with parallax Y */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-top transition-all duration-700 ease-in-out z-0"
        style={{
          backgroundImage: `url('${slides[activeIndex].bg}')`,
          backgroundPosition: `top calc(50% + ${bgPositionY}px)`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-10" />

      {/* Hero content */}
      <div ref={containerRef} className="relative z-20 h-screen w-full">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex items-center justify-start px-6 md:px-20">
                <div className="max-w-2xl text-white space-y-6 px-20">
                  <motion.h1
                    key={`title-${index}-${activeIndex}`}
                    initial="hidden"
                    animate={activeIndex === index ? 'visible' : 'hidden'}
                    variants={titleVariants}
                    className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg font-serif"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`subtitle-${index}-${activeIndex}`}
                    initial="hidden"
                    animate={activeIndex === index ? 'visible' : 'hidden'}
                    variants={subtitleVariants}
                    className="text-lg md:text-xl text-white/90 drop-shadow"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    key={`button-${index}-${activeIndex}`}
                    initial="hidden"
                    animate={activeIndex === index ? 'visible' : 'hidden'}
                    variants={buttonVariants}
                  >
                    <button className="px-6 py-3 bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition">
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
