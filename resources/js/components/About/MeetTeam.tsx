// resources/js/components/about/MeetTheTeam.tsx

const teamMembers = [
  {
    name: 'Ama K. Boateng',
    title: 'Founder & President',
    bio: 'Ama is a celebrated poet and arts advocate with over 15 years of experience empowering creatives across Africa.',
    imageUrl: '/images/team/worker2.png',
  },
  {
    name: 'Tunde Okoro',
    title: 'Director of Music & Performance',
    bio: 'Tunde is a Grammy-nominated musician who oversees SLAAM’s performance showcases and talent development.',
    imageUrl: '/images/team/worker1.png',
  },
  {
    name: 'Fatima Ibrahim',
    title: 'Creative Programs Lead',
    bio: 'Fatima curates workshops and art residencies to help young creators hone their craft and tell their stories.',
    imageUrl: '/images/team/worker2.png',
  },
  // Add more team members as needed
];

export default function MeetTheTeam() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-left"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
