export default function HeroSection() {
    return (
        <section className="w-full px-8 py-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-xl text-left">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                        Where Fandom <br/> Becomes Reality
                    </h1>
                    <p className="mb-8">
                        Cosplay is more than just a hobby—it's expression, craftsmanship, and community.
                        Our platform offers cosplayers the opportunity to showcase their work, network, and find
                        like-minded people.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button
                            className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded shadow hover:bg-primary-hover">
                            CREATE ACCOUNT
                        </button>
                    </div>
                </div>
                <div className=" p-6 rounded-xl w-128 h-128 flex items-center justify-center">
                    <img
                        src="/cosplay-bunny.png"
                        alt="Cosplay Bunny"
                        className="max-h-full max-w-full"
                    />
                </div>
            </div>
        </section>
    );
}
