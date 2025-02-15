function LoginPage() {
    try {
        const [isModalOpen, setIsModalOpen] = React.useState(false);
        const [selectedProvider, setSelectedProvider] = React.useState(null);

        const handleProviderSelect = async (provider) => {
            setSelectedProvider(provider);
            setIsModalOpen(true);
        };

        const handleLoginSuccess = (session) => {
            window.location.href = `/${session.providerId}/dashboard`;
        };

        return (
            <div className="min-h-screen flex items-center justify-center p-4" data-name="login-page">
                {!isModalOpen ? (
                    <div className="max-w-4xl w-full" data-name="provider-selection">
                        <h2 className="text-2xl font-bold text-center mb-8">Select Your Provider</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {mockDatabase.providers.map(provider => (
                                <button
                                    key={provider.id}
                                    className="provider-card p-6 text-left hover:border-primary-main transition-colors"
                                    onClick={() => handleProviderSelect(provider)}
                                    data-name={`provider-${provider.id}`}
                                >
                                    <div className="flex items-center space-x-4 mb-4">
                                        <i className={`${provider.logo} text-3xl`} style={{ color: provider.primaryColor }}></i>
                                        <h3 className="text-xl font-bold">{provider.name}</h3>
                                    </div>
                                    <p className="text-gray-400">{provider.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="max-w-md w-full" data-name="login-modal">
                        <div className="dashboard-card">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-4">
                                    <i className={`${selectedProvider.logo} text-3xl`} style={{ color: selectedProvider.primaryColor }}></i>
                                    <h2 className="text-2xl font-bold">{selectedProvider.name}</h2>
                                </div>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                    data-name="close-modal"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <LoginForm onSuccess={handleLoginSuccess} />
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
