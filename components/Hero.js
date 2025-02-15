function Hero() {
    return (
        <section className="hero-section min-h-screen flex items-center pt-20" data-name="hero-section">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6" data-name="hero-title">
                        Connect Students with Perfect Homestay Families
                    </h1>
                    <p className="text-xl text-gray-300 mb-8" data-name="hero-description">
                        Streamline your homestay operations, increase productivity, and create perfect matches between students and families with our comprehensive platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-name="hero-actions">
                        <button className="btn btn-primary w-full sm:w-auto" data-name="get-started-button">
                            Get Started
                        </button>
                        <button className="btn btn-secondary w-full sm:w-auto" data-name="learn-more-button">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
