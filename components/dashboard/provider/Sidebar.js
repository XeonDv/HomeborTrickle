function Sidebar() {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

        const menuItems = [
            {
                icon: "fas fa-chart-line",
                label: "Overview",
                path: "/provider/dashboard"
            },
            {
                icon: "fas fa-user-graduate",
                label: "Students",
                path: "/provider/students"
            },
            {
                icon: "fas fa-home",
                label: "Families",
                path: "/provider/families"
            },
            {
                icon: "fas fa-users",
                label: "Coordinators",
                path: "/provider/coordinators"
            },
            {
                icon: "fas fa-dollar-sign",
                label: "Payments",
                path: "/provider/payments"
            },
            {
                icon: "fas fa-star",
                label: "Reviews",
                path: "/provider/reviews"
            },
            {
                icon: "fas fa-cog",
                label: "Settings",
                path: "/provider/settings"
            }
        ];

        const handleNavigation = (path) => {
            window.history.pushState({}, '', path);
            setCurrentPath(path);
        };

        return (
            <div className="provider-sidebar" data-name="provider-sidebar">
                <div className="mb-8">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_0b6c12ccc8000001/b9abdb97-cb91-43a8-942f-b459796bdd7c.jpeg"
                        alt="Provider Logo"
                        className="h-8 mb-2"
                    />
                    <h2 className="text-lg font-semibold">Provider Dashboard</h2>
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            className={`w-full flex items-center space-x-3 px-4 py-2 rounded transition-colors ${
                                currentPath === item.path 
                                    ? 'bg-primary-main text-white' 
                                    : 'hover:bg-secondary-light'
                            }`}
                            data-name={`nav-${item.label.toLowerCase()}`}
                        >
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-700">
                    <div className="px-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-primary-main flex items-center justify-center">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <p className="font-medium">Admin User</p>
                                <p className="text-sm text-gray-400">admin@example.com</p>
                            </div>
                        </div>
                        <button className="mt-4 w-full btn btn-secondary">
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
