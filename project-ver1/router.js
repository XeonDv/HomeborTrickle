function Router() {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

        React.useEffect(() => {
            const handlePathChange = () => {
                setCurrentPath(window.location.pathname);
            };

            window.addEventListener('popstate', handlePathChange);
            return () => window.removeEventListener('popstate', handlePathChange);
        }, []);

        const navigate = (path) => {
            window.history.pushState({}, '', path);
            setCurrentPath(path);
        };

        const routes = {
            '/': <App />,
            '/login': <LoginPage />,
            '/student/register': (
                <div className="min-h-screen bg-secondary-main pt-20">
                    <div className="container mx-auto px-4 py-8">
                        <BasicInfo onNext={() => navigate('/student/register/additional')} />
                    </div>
                </div>
            ),
            '/student/register/additional': (
                <div className="min-h-screen bg-secondary-main pt-20">
                    <div className="container mx-auto px-4 py-8">
                        <AdditionalInfo 
                            onNext={() => navigate('/student/register/uploads')}
                            onBack={() => navigate('/student/register')}
                        />
                    </div>
                </div>
            ),
            '/student/register/uploads': (
                <div className="min-h-screen bg-secondary-main pt-20">
                    <div className="container mx-auto px-4 py-8">
                        <Uploads 
                            onComplete={() => navigate('/student/dashboard')}
                            onBack={() => navigate('/student/register/additional')}
                        />
                    </div>
                </div>
            ),
            '/student/dashboard': (
                <div className="dashboard-container">
                    <div className="dashboard-sidebar">
                        <nav className="space-y-4">
                            <button onClick={() => navigate('/student/dashboard')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Profile</button>
                            <button onClick={() => navigate('/student/dashboard/homestay')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Homestay Details</button>
                            <button onClick={() => navigate('/student/dashboard/reviews')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Reviews</button>
                        </nav>
                    </div>
                    <div className="dashboard-main">
                        <Profile />
                    </div>
                </div>
            ),
            '/student/dashboard/homestay': (
                <div className="dashboard-container">
                    <div className="dashboard-sidebar">
                        <nav className="space-y-4">
                            <button onClick={() => navigate('/student/dashboard')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Profile</button>
                            <button onClick={() => navigate('/student/dashboard/homestay')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Homestay Details</button>
                            <button onClick={() => navigate('/student/dashboard/reviews')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Reviews</button>
                        </nav>
                    </div>
                    <div className="dashboard-main">
                        <HomestayDetails />
                    </div>
                </div>
            ),
            '/student/dashboard/reviews': (
                <div className="dashboard-container">
                    <div className="dashboard-sidebar">
                        <nav className="space-y-4">
                            <button onClick={() => navigate('/student/dashboard')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Profile</button>
                            <button onClick={() => navigate('/student/dashboard/homestay')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Homestay Details</button>
                            <button onClick={() => navigate('/student/dashboard/reviews')} className="w-full text-left px-4 py-2 hover:bg-primary-main rounded">Reviews</button>
                        </nav>
                    </div>
                    <div className="dashboard-main">
                        <Reviews />
                    </div>
                </div>
            )
        };

        // Check if the current path starts with a provider subdomain
        const pathParts = currentPath.split('/').filter(Boolean);
        if (pathParts.length > 0) {
            const potentialProvider = mockDatabase.providers.find(p => p.subdomain === pathParts[0]);
            if (potentialProvider) {
                const subPath = '/' + pathParts.slice(1).join('/');
                
                // Provider-specific routes
                if (subPath === '/login') {
                    return <LoginPage />;
                }
                
                if (subPath === '') {
                    return <ProviderLanding provider={potentialProvider} />;
                }
                
                // Add other provider-specific routes here
            }
        }

        return routes[currentPath] || <div>404 Not Found</div>;
    } catch (error) {
        reportError(error);
        return <div>An error occurred</div>;
    }
}
