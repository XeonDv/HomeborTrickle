function DynamicList({ items, onAdd, onRemove, renderItem }) {
    try {
        return (
            <div className="space-y-4" data-name="dynamic-list">
                {items.map((item, index) => (
                    <div key={index} className="relative" data-name={`list-item-${index}`}>
                        {renderItem(item, index)}
                        <button
                            type="button"
                            onClick={() => onRemove(index)}
                            className="absolute top-0 right-0 p-2 text-error-main hover:text-error-light"
                            data-name={`remove-button-${index}`}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={onAdd}
                    className="btn btn-secondary w-full"
                    data-name="add-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add Item
                </button>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
