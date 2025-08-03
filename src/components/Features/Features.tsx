export default function FeaturesSection() {
    const features = [
        { emoji: '🎨', title: 'Showcase Your Work', desc: 'Upload and display your best cosplay creations.' },
        { emoji: '📸', title: 'Event Galleries', desc: 'Find and explore photos from cosplay events.' },
        { emoji: '🤝', title: 'Connect with Others', desc: 'Follow, chat, and collaborate with fellow fans.' },
        { emoji: '🏆', title: 'Contests & Awards', desc: 'Participate in community challenges and win badges.' },
    ];

    return (
        <section className="w-full bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-black">What You Can Do</h2>
                <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    {features.map((feature) => (
                        <div key={feature.title} className="bg-background p-6 rounded-xl shadow-md text-left">
                            <div className="text-4xl mb-4">{feature.emoji}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-700">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
