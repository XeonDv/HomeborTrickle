function RoomInfo({ onNext, onBack }) {
    try {
        const [rooms, setRooms] = React.useState([
            {
                type: "single",
                bedType: "single"
            }
        ]);

        const [errors, setErrors] = React.useState({});

        const handleAddRoom = () => {
            setRooms(prev => [...prev, { type: "single", bedType: "single" }]);
        };

        const handleRemoveRoom = (index) => {
            setRooms(prev => prev.filter((_, i) => i !== index));
        };

        const handleRoomChange = (index, field, value) => {
            setRooms(prev => prev.map((room, i) => 
                i === index ? { ...room, [field]: value } : room
            ));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if (rooms.length === 0) {
                setErrors({ rooms: "At least one room is required" });
                return;
            }

            try {
                // Save to local storage or API
                setLocalStorage('familyRoomInfo', rooms);
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="room-info-section">
                <ProgressBar currentStep={4} totalSteps={5} />
                <h2 className="text-2xl font-bold mb-6">Room Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        {rooms.map((room, index) => (
                            <RoomForm
                                key={index}
                                room={room}
                                onChange={(e) => handleRoomChange(index, e.target.name, e.target.value)}
                                onRemove={() => handleRemoveRoom(index)}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleAddRoom}
                        className="btn btn-secondary w-full"
                        data-name="add-room-button"
                    >
                        <i className="fas fa-plus mr-2"></i>
                        Add Room
                    </button>

                    {errors.rooms && <div className="form-error">{errors.rooms}</div>}
                    {errors.submit && <div className="form-error">{errors.submit}</div>}

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onBack}
                            className="btn btn-secondary"
                            data-name="back-button"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            data-name="next-button"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
