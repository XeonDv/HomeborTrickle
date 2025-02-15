function RoomForm({ room, onChange, onRemove }) {
    try {
        return (
            <div className="grid md:grid-cols-3 gap-4 p-4 bg-secondary-light rounded-lg" data-name="room-form">
                <FormSelect
                    label="Room Type"
                    name="type"
                    value={room.type}
                    onChange={onChange}
                    options={[
                        { value: "single", label: "Single" },
                        { value: "double", label: "Double" }
                    ]}
                    data-name="room-type-select"
                />

                <FormSelect
                    label="Bed Type"
                    name="bedType"
                    value={room.bedType}
                    onChange={onChange}
                    options={[
                        { value: "single", label: "Single" },
                        { value: "double", label: "Double" },
                        { value: "bunk", label: "Bunk" }
                    ]}
                    data-name="bed-type-select"
                />

                <button
                    type="button"
                    onClick={onRemove}
                    className="self-end btn btn-error"
                    data-name="remove-room-button"
                >
                    Remove Room
                </button>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
