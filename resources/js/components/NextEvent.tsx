import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const targetDate = new Date('2025-06-25T09:00:00');

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const NextEvent = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-3xl text-center text-white px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Next SLAAM AWARDS</h2>
        <p className="text-xl md:text-2xl mb-6">June 25, 2025 | New York City</p>

        <div className="flex justify-center gap-4 text-white mb-6 text-lg md:text-2xl font-mono">
          <CountdownItem label="Days" value={timeLeft.days} />
          <CountdownItem label="Hours" value={timeLeft.hours} />
          <CountdownItem label="Minutes" value={timeLeft.minutes} />
          <CountdownItem label="Seconds" value={timeLeft.seconds} />
        </div>
      </motion.div>
    </section>
  );
};

const CountdownItem = ({ label, value }) => (
  <div className="text-center">
    <div className="text-4xl font-bold">{String(value).padStart(2, '0')}</div>
    <div className="text-sm uppercase tracking-widest">{label}</div>
  </div>
);

export default NextEvent;
