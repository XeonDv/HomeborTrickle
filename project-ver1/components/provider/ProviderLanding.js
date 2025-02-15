function ProviderLanding({ provider }) {
    try {
        return (
            <div className="min-h-screen" data-name="provider-landing">
                <header className="bg-secondary-main py-4" style={{ borderBottom: `4px solid ${provider.primaryColor}` }}>
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <i className={`${provider.logo} text-3xl`} style={{ color: provider.primaryColor }}></i>
                            <h1 className="text-2xl font-bold">{provider.name}</h1>
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => window.location.href = `/${provider.subdomain}/login`}
                            style={{ backgroundColor: provider.primaryColor }}
                        >
                            Login
                        </button>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">{provider.welcomeText}</h2>
                            <p className="text-xl text-gray-400">{provider.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="dashboard-card">
                                <h3 className="text-xl font-bold mb-4">For Students</h3>
                                <p className="text-gray-400 mb-6">Find your perfect homestay family and start your journey.</p>
                                <button 
                                    className="btn btn-primary w-full"
                                    onClick={() => window.location.href = `/${provider.subdomain}/student/register`}
                                    style={{ backgroundColor: provider.primaryColor }}
                                >
                                    Register as Student
                                </button>
                            </div>

                            <div className="dashboard-card">
                                <h3 className="text-xl font-bold mb-4">For Families</h3>
                                <p className="text-gray-400 mb-6">Open your home to international students and create lasting connections.</p>
                                <button 
                                    className="btn btn-primary w-full"
                                    onClick={() => window.location.href = `/${provider.subdomain}/family/register`}
                                    style={{ backgroundColor: provider.primaryColor }}
                                >
                                    Register as Family
                                </button>
                            </div>
                        </div>

                        <div className="dashboard-card mt-12">
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <i className="fas fa-envelope text-2xl mb-2" style={{ color: provider.primaryColor }}></i>
                                    <p>{provider.contact.email}</p>
                                </div>
                                <div>
                                    <i className="fas fa-phone text-2xl mb-2" style={{ color: provider.primaryColor }}></i>
                                    <p>{provider.contact.phone}</p>
                                </div>
                                <div>
                                    <i className="fas fa-map-marker-alt text-2xl mb-2" style={{ color: provider.primaryColor }}></i>
                                    <p>{provider.contact.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
