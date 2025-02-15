function HomestayDetails() {
    try {
        const [homestay, setHomestay] = React.useState({
            family: {
                name: "Smith Family",
                address: "123 Maple Street, Vancouver, BC",
                phone: "+1 (555) 123-4567",
                email: "smith@example.com"
            },
            room: {
                type: "Single",
                bed: "Single",
                amenities: ["Desk", "Wardrobe", "Window"]
            },
            meals: {
                plan: "3 meals per day",
                dietary: "No restrictions"
            }
        });

        return (
            <div data-name="homestay-details">
                <h2 className="text-2xl font-bold mb-6">Homestay Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="dashboard-card" data-name="family-info">
                        <h3 className="text-xl font-semibold mb-4">Family Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Name:</span> {homestay.family.name}</p>
                            <p><span className="text-gray-400">Address:</span> {homestay.family.address}</p>
                            <p><span className="text-gray-400">Phone:</span> {homestay.family.phone}</p>
                            <p><span className="text-gray-400">Email:</span> {homestay.family.email}</p>
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="room-info">
                        <h3 className="text-xl font-semibold mb-4">Room Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Type:</span> {homestay.room.type}</p>
                            <p><span className="text-gray-400">Bed:</span> {homestay.room.bed}</p>
                            <p><span className="text-gray-400">Amenities:</span> {homestay.room.amenities.join(", ")}</p>
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="meal-info">
                        <h3 className="text-xl font-semibold mb-4">Meal Information</h3>
                        <div className="space-y-2">
                            <p><span className="text-gray-400">Meal Plan:</span> {homestay.meals.plan}</p>
                            <p><span className="text-gray-400">Dietary Requirements:</span> {homestay.meals.dietary}</p>
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
