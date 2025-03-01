function App() {
    try {
        const [isAuthenticated, setIsAuthenticated] = React.useState(false);
        const [user, setUser] = React.useState(null);
        const [currentPage, setCurrentPage] = React.useState('home');

        const handleLogin = async (credentials) => {
            try {
                const response = await trickleListObjects('user', 100, true);
                const users = response.items;
                const user = users.find(u => 
                    u.objectData.email === credentials.email && 
                    u.objectData.password === credentials.password
                );

                if (user) {
                    setUser(user);
                    setIsAuthenticated(true);
                    setCurrentPage('dashboard');
                } else {
                    throw new Error('Invalid credentials');
                }
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        };

        const handleLogout = () => {
            setUser(null);
            setIsAuthenticated(false);
            setCurrentPage('home');
        };

        const renderPage = () => {
            switch (currentPage) {
                case 'home':
                    return <Home setCurrentPage={setCurrentPage} />;
                case 'login':
                    return <Login onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
                case 'register':
                    return <Register setCurrentPage={setCurrentPage} />;
                case 'dashboard':
                    return <Dashboard user={user} onLogout={handleLogout} />;
                default:
                    return <Home setCurrentPage={setCurrentPage} />;
            }
        };

        return (
            <div data-name="app-container" className="min-h-screen bg-gray-50">
                {renderPage()}
            </div>
        );
    } catch (error) {
        console.error('App error:', error);
        reportError(error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
                    <p className="mt-2">Please try refreshing the page</p>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
