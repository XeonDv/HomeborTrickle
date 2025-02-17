function LoginPage() {
    try {
        const [providers, setProviders] = React.useState([]);
        const [isModalOpen, setIsModalOpen] = React.useState(false);
        const [selectedProvider, setSelectedProvider] = React.useState(null);
        const [isLoading, setIsLoading] = React.useState(true);
        const [error, setError] = React.useState("");

        React.useEffect(() => {
            loadProviders();
        }, []);

        const loadProviders = async () => {
            try {
                const data = await getProviders();
                setProviders(data);
            } catch (error) {
                setError("Failed to load providers. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        const handleProviderSelect = (provider) => {
            const subdomain = provider.subdomain;
            window.location.href = `https://${subdomain}.homebor.trickle.host/login`;
        };

        if (isLoading) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <i className="fas fa-spinner fa-spin text-4xl"></i>
                </div>
            );
        }

        if (error) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-error-main text-center">
                        <i className="fas fa-exclamation-circle text-4xl mb-4"></i>
                        <p>{error}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen flex items-center justify-center p-4" data-name="login-page">
                <div className="max-w-4xl w-full" data-name="provider-selection">
                    <h2 className="text-2xl font-bold text-center mb-8">Select Your Provider</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {providers.map(provider => (
                            <button
                                key={provider.id}
                                className="provider-card p-6 text-left hover:border-primary-main transition-colors"
                                onClick={() => handleProviderSelect(provider)}
                                data-name={`provider-${provider.id}`}
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    {provider.logo_url ? (
                                        <img 
                                            src={provider.logo_url}
                                            alt={`${provider.name} logo`}
                                            className="w-8 h-8"
                                        />
                                    ) : (
                                        <i className="fas fa-building text-3xl" style={{ color: provider.primary_color }}></i>
                                    )}
                                    <h3 className="text-xl font-bold">{provider.name}</h3>
                                </div>
                                <p className="text-gray-400">{provider.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
