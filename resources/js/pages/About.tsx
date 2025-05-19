import AboutHero from '@/components/About/AboutHero';
import Mission from '@/components/About/Mission';
import Navbar from '@/components/homepage/Navbar';
import History from '@/components/About/History';
import MeetTheTeam from '@/components/About/MeetTeam';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Footer from '@/components/homepage/footer';

export default function Home() {
  const { auth } = usePage<SharedData>().props;

  return (
    <>
      <Head title='About - SLAAM' />
      <Navbar />
      <AboutHero />
      <Mission />
      <History />
      <MeetTheTeam />
      <Footer />
    </>
  );
}