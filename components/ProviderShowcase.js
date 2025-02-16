function ProviderShowcase() {
    try {
        const handleProviderClick = (subdomain) => {
            window.location.href = `https://${subdomain}.homebor.trickle.host`;
        };

        const providers = [
            { 
                id: "homestayplus",
                name: "HomestayPlus", 
                logo: "fas fa-home",
                subdomain: "homestayplus",
                description: "Leading homestay provider in Vancouver",
                primaryColor: "#6c2bd9"
            },
            { 
                id: "ihomestay",
                name: "iHomestay", 
                logo: "fas fa-building",
                subdomain: "ihomestay",
                description: "International homestay network",
                primaryColor: "#2563eb"
            },
            { 
                id: "excelabroad",
                name: "ExcelAbroad", 
                logo: "fas fa-globe",
                subdomain: "excelabroad",
                description: "Excellence in study abroad experiences",
                primaryColor: "#059669"
            },
            { 
                id: "galaxy",
                name: "Galaxy", 
                logo: "fas fa-star",
                subdomain: "galaxy",
                description: "Global education solutions",
                primaryColor: "#7c3aed"
            }
        ];

        return (
            <section id="providers" className="py-20 bg-secondary-light" data-name="providers-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12" data-name="providers-title">
                        Trusted by Leading Providers
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6" data-name="providers-grid">
                        {providers.map((provider, index) => (
                            <div
                                key={provider.id}
                                className="provider-card p-6 text-center cursor-pointer transition-transform hover:scale-105"
                                onClick={() => handleProviderClick(provider.subdomain)}
                                data-name={`provider-card-${index}`}
                            >
                                <i className={`${provider.logo} text-4xl text-primary-main mb-4`}></i>
                                <h3 className="text-xl font-bold">{provider.name}</h3>
                                <p className="text-gray-400 mt-2">{provider.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
