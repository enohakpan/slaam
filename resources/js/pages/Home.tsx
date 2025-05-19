import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from '@/components/homepage/Navbar';
import NextEvent from '@/components/homepage/NextEvent';
import Artists from '@/components/homepage/artists';
import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import ArtistShowcase from '@/components/homepage/ArtistShowcase';
import Footer from '@/components/homepage/footer';


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
