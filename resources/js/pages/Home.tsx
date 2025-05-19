import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import NextEvent from '@/components/NextEvent';
import Artists from '@/components/artists';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ArtistShowcase from '@/components/ArtistShowcase';
import Footer from '@/components/footer';


export default function Home() {
	const { auth } = usePage<SharedData>().props;

	return (
		<>
			<Head title='Home' />
			<Navbar />
			<Hero />
			<About />
			<Artists />
			<NextEvent />
			<ArtistShowcase />
			<Footer />
		</>
	);
}
