function Home({ setCurrentPage }) {
    try {
        return (
            <div data-name="home-container" className="min-h-screen">
                <header data-name="home-header" className="bg-white shadow-md">
                    <nav className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div data-name="logo" className="text-2xl font-bold text-gray-800">
                                HostAbroad
                            </div>
                            <div data-name="nav-buttons" className="space-x-4">
                                <button
                                    onClick={() => setCurrentPage('login')}
                                    className="btn-primary"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setCurrentPage('register')}
                                    className="btn-secondary"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>

                <main>
                    <section data-name="hero-section" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
                        <div className="container mx-auto px-6 text-center text-white">
                            <h1 className="text-5xl font-bold mb-6">
                                Connect with Host Families Worldwide
                            </h1>
                            <p className="text-xl mb-8">
                                Find your perfect homestay match and create lasting memories
                            </p>
                            <button
                                onClick={() => setCurrentPage('register')}
                                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
                            >
                                Get Started
                            </button>
                        </div>
                    </section>

                    <section data-name="features-section" className="py-16">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                Why Choose HostAbroad?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="card text-center">
                                    <i className="fas fa-home text-4xl text-purple-500 mb-4"></i>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Verified Host Families
                                    </h3>
                                    <p className="text-gray-600">
                                        All our host families are carefully screened and verified
                                    </p>
                                </div>
                                <div className="card text-center">
                                    <i className="fas fa-globe text-4xl text-purple-500 mb-4"></i>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Cultural Exchange
                                    </h3>
                                    <p className="text-gray-600">
                                        Immerse yourself in local culture and traditions
                                    </p>
                                </div>
                                <div className="card text-center">
                                    <i className="fas fa-handshake text-4xl text-purple-500 mb-4"></i>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Perfect Matching
                                    </h3>
                                    <p className="text-gray-600">
                                        We ensure the best match between students and families
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer data-name="home-footer" className="bg-gray-800 text-white py-8">
                    <div className="container mx-auto px-6">
                        <div className="text-center">
                            <p>&copy; 2024 HostAbroad. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return (
            <div className="text-center py-10">
                <p className="text-red-600">Error loading home page</p>
            </div>
        );
    }
}
