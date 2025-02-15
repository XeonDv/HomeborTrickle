function Header() {
    try {
        const handleLogin = () => {
            window.location.href = '/login';
        };

        return (
            <header className="fixed w-full bg-secondary-main bg-opacity-90 backdrop-blur-sm z-50" data-name="header">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center" data-name="logo-container">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_0b6c12ccc8000001/b9abdb97-cb91-43a8-942f-b459796bdd7c.jpeg"
                            alt="Homebor Logo"
                            className="h-10"
                            data-name="logo"
                        />
                        <span className="ml-2 text-xl font-bold" data-name="brand-name">Homebor</span>
                    </div>
                    
                    <nav className="hidden md:flex space-x-6" data-name="nav-links">
                        <a href="#features" className="text-gray-300 hover:text-white" data-name="features-link">Features</a>
                        <a href="#benefits" className="text-gray-300 hover:text-white" data-name="benefits-link">Benefits</a>
                        <a href="#providers" className="text-gray-300 hover:text-white" data-name="providers-link">Providers</a>
                    </nav>

                    <div className="flex items-center space-x-4" data-name="header-actions">
                        <button 
                            className="btn btn-secondary" 
                            data-name="login-button"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                        <button className="btn btn-primary" data-name="demo-button">Book a Demo</button>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
