function AssignedStudents() {
    try {
        const [students, setStudents] = React.useState([
            {
                id: 1,
                name: "John Doe",
                profilePicture: "https://example.com/profile.jpg",
                startDate: "2024-01-15",
                endDate: "2024-06-15",
                nationality: "United States",
                language: "English",
                mealPlan: "3 meals per day",
                roomType: "Single"
            }
        ]);

        return (
            <div className="space-y-6" data-name="assigned-students">
                <h2 className="text-2xl font-bold mb-6">Assigned Students</h2>

                <div className="grid gap-6">
                    {students.map(student => (
                        <div key={student.id} className="dashboard-card" data-name={`student-${student.id}`}>
                            <div className="flex items-start space-x-4">
                                <img 
                                    src={student.profilePicture} 
                                    alt={student.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div className="flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-semibold">{student.name}</h3>
                                        <div className="text-sm text-gray-400">
                                            {formatDate(student.startDate)} - {formatDate(student.endDate)}
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p><span className="text-gray-400">Nationality:</span> {student.nationality}</p>
                                            <p><span className="text-gray-400">Language:</span> {student.language}</p>
                                        </div>
                                        <div>
                                            <p><span className="text-gray-400">Meal Plan:</span> {student.mealPlan}</p>
                                            <p><span className="text-gray-400">Room Type:</span> {student.roomType}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {students.length === 0 && (
                    <div className="text-center text-gray-400 py-8">
                        No students currently assigned
                    </div>
                )}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
