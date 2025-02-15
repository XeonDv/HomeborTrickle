function Benefits() {
    const benefits = [
        {
            title: "Organize Your Information",
            description: "Keep all relevant data organized and easily accessible"
        },
        {
            title: "Increase Team Productivity",
            description: "Enhance collaboration and efficiency among team members"
        },
        {
            title: "Reduce Your Duty Cycle",
            description: "Automate routine tasks to focus on more critical activities"
        },
        {
            title: "Save Time and Money",
            description: "Optimize operations to maximize your resources"
        },
        {
            title: "Strengthen Your Brand",
            description: "Build a reputable brand with our reliable platform"
        }
    ];

    return (
        <section id="benefits" className="py-20" data-name="benefits-section">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12" data-name="benefits-title">
                    Benefits of Working with Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-name="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item" data-name={`benefit-item-${index}`}>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
