import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
    const features = [
        {emoji: '🎨', title: 'Showcase Your Work', description: 'Upload and display your best cosplay creations.'},
        {emoji: '📸', title: 'Event Galleries', description: 'Find and explore photos from cosplay events.'},
        {emoji: '🤝', title: 'Connect with Others', description: 'Follow, chat, and collaborate with fellow fans.'},
        {emoji: '🏆', title: 'Contests & Awards', description: 'Participate in community challenges and win badges.'},
    ];

    return (
        <section className="w-full bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-black">What You Can Do</h2>
                <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
