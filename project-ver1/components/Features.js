function Features() {
    const features = [
        {
            icon: "fas fa-tasks",
            title: "Simplify Operations",
            description: "Streamline your homestay management with our intuitive platform"
        },
        {
            icon: "fas fa-clock",
            title: "Save Time",
            description: "Automate routine tasks and focus on what matters most"
        },
        {
            icon: "fas fa-users",
            title: "Perfect Matching",
            description: "Connect students with ideal homestay families using our smart matching system"
        }
    ];

    return (
        <section id="features" className="py-20 bg-secondary-light" data-name="features-section">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12" data-name="features-title">
                    Platform Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8" data-name="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card p-6" data-name={`feature-card-${index}`}>
                            <i className={`${feature.icon} text-4xl text-primary-main mb-4`}></i>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
