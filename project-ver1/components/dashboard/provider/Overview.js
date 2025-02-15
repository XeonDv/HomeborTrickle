function Overview() {
    try {
        const [stats, setStats] = React.useState({
            totalStudents: 156,
            activeStudents: 89,
            totalFamilies: 45,
            availableFamilies: 12,
            pendingPairings: 8,
            monthlyRevenue: 45600,
            recentActivities: [
                {
                    id: 1,
                    type: "student_registration",
                    description: "New student registration: John Doe",
                    timestamp: "2024-01-20T10:30:00Z"
                },
                {
                    id: 2,
                    type: "family_certified",
                    description: "Smith Family certified for homestay",
                    timestamp: "2024-01-19T15:45:00Z"
                }
            ]
        });

        return (
            <div className="space-y-6" data-name="overview-page">
                <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

                <div className="card-grid" data-name="stats-overview">
                    <div className="stat-card">
                        <p className="stat-card-title">Total Students</p>
                        <p className="stat-card-value">{stats.totalStudents}</p>
                        <p className="text-sm text-gray-400">{stats.activeStudents} active</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Total Families</p>
                        <p className="stat-card-value">{stats.totalFamilies}</p>
                        <p className="text-sm text-gray-400">{stats.availableFamilies} available</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Pending Pairings</p>
                        <p className="stat-card-value">{stats.pendingPairings}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Monthly Revenue</p>
                        <p className="stat-card-value">${stats.monthlyRevenue}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="dashboard-card" data-name="recent-activity">
                        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {stats.recentActivities.map(activity => (
                                <div key={activity.id} className="flex items-start space-x-4">
                                    <div className="mt-1">
                                        <i className={`fas fa-${activity.type === 'student_registration' ? 'user-plus' : 'check-circle'} text-primary-main`}></i>
                                    </div>
                                    <div>
                                        <p className="text-sm">{activity.description}</p>
                                        <p className="text-xs text-gray-400">{new Date(activity.timestamp).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="quick-actions">
                        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="btn btn-secondary">
                                <i className="fas fa-user-plus mr-2"></i>
                                Add Student
                            </button>
                            <button className="btn btn-secondary">
                                <i className="fas fa-home mr-2"></i>
                                Add Family
                            </button>
                            <button className="btn btn-secondary">
                                <i className="fas fa-handshake mr-2"></i>
                                Create Pairing
                            </button>
                            <button className="btn btn-secondary">
                                <i className="fas fa-file-invoice-dollar mr-2"></i>
                                Process Payment
                            </button>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card" data-name="occupancy-chart">
                    <h3 className="text-xl font-semibold mb-4">Occupancy Rate</h3>
                    <div className="chart-container">
                        {/* Placeholder for occupancy rate chart */}
                        <div className="h-64 flex items-center justify-center text-gray-400">
                            Occupancy Rate Chart
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
