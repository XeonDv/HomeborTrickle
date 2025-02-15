function Students() {
    try {
        const [students, setStudents] = React.useState([
            {
                id: 1,
                name: "John Doe",
                profilePicture: "https://example.com/profile.jpg",
                startDate: "2024-01-15",
                endDate: "2024-06-15",
                status: "confirmed",
                destinationCity: "Vancouver",
                assignedFamily: "Smith Family",
                agency: "Study Abroad Inc"
            }
        ]);

        const [filters, setFilters] = React.useState({
            status: "",
            city: "",
            agency: ""
        });

        const getStatusBadgeClass = (status) => {
            const classes = {
                "new lead": "bg-info-main",
                confirmed: "bg-success-main",
                "family assigned": "bg-primary-main",
                canceled: "bg-error-main",
                "former student": "bg-gray-500"
            };
            return `status-badge ${classes[status] || "bg-gray-500"}`;
        };

        const filteredStudents = students.filter(student => {
            return (!filters.status || student.status === filters.status) &&
                   (!filters.city || student.destinationCity.toLowerCase().includes(filters.city.toLowerCase())) &&
                   (!filters.agency || student.agency.toLowerCase().includes(filters.agency.toLowerCase()));
        });

        return (
            <div className="space-y-6" data-name="students-page">
                <h2 className="text-2xl font-bold mb-6">Students</h2>

                <div className="filter-bar" data-name="students-filters">
                    <FormSelect
                        value={filters.status}
                        onChange={(e) => setFilters(prev => ({...prev, status: e.target.value}))}
                        options={[
                            { value: "", label: "All Statuses" },
                            { value: "new lead", label: "New Lead" },
                            { value: "confirmed", label: "Confirmed" },
                            { value: "family assigned", label: "Family Assigned" },
                            { value: "canceled", label: "Canceled" },
                            { value: "former student", label: "Former Student" }
                        ]}
                    />
                    <FormInput
                        type="text"
                        placeholder="Search by city..."
                        value={filters.city}
                        onChange={(e) => setFilters(prev => ({...prev, city: e.target.value}))}
                    />
                    <FormInput
                        type="text"
                        placeholder="Search by agency..."
                        value={filters.agency}
                        onChange={(e) => setFilters(prev => ({...prev, agency: e.target.value}))}
                    />
                </div>

                <div className="dashboard-card" data-name="students-list">
                    <div className="overflow-x-auto">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Destination</th>
                                    <th>Assigned Family</th>
                                    <th>Agency</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map(student => (
                                    <tr key={student.id}>
                                        <td className="flex items-center space-x-3">
                                            <img 
                                                src={student.profilePicture} 
                                                alt={student.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <span>{student.name}</span>
                                        </td>
                                        <td>
                                            <div>{formatDate(student.startDate)}</div>
                                            <div className="text-sm text-gray-400">to {formatDate(student.endDate)}</div>
                                        </td>
                                        <td>
                                            <span className={getStatusBadgeClass(student.status)}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td>{student.destinationCity}</td>
                                        <td>{student.assignedFamily || "Not Assigned"}</td>
                                        <td>{student.agency}</td>
                                        <td>
                                            <div className="flex space-x-2">
                                                <button className="btn btn-secondary btn-sm">View</button>
                                                <button className="btn btn-primary btn-sm">Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
