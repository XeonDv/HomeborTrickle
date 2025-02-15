function FormSelect({ label, options, value, onChange, error, ...props }) {
    try {
        return (
            <div className="form-group" data-name="form-select">
                <label className="form-label">{label}</label>
                <select
                    value={value}
                    onChange={onChange}
                    className="form-select"
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <div className="form-error">{error}</div>}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
