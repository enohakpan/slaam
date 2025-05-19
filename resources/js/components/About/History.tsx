// resources/js/components/about/HistorySection.tsx

export default function History() {
    return (
        <section className="z-10 bg-[#171513] dark:bg-gray-950 py-16 px-4 md:px-8 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Our History
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    The story of SLAAM (Society of Literary Artists, Authors, and Musicians) began with a simple but powerful vision: to create a vibrant community where African creatives could thrive, collaborate, and be celebrated.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Founded in [Insert Year], SLAAM emerged from grassroots gatherings and cultural forums where storytellers, poets, musicians, and visual artists united to share their crafts and inspire future generations.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Over the years, our movement has grown into a continental network with showcases, awards, workshops, and global partnerships—amplifying African voices and elevating talent across borders.
                </p>
            </div>
        </section>
    );
}
