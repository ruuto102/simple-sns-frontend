type FeatureCardProps = {
    emoji: string;
    title: string;
    description: string;
};

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
    return (
        <div className="bg-pink-100 p-6 rounded-xl shadow-md text-left">
            <div className="text-4xl mb-4">{emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    );
}
