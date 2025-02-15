function FormInput({ label, type = "text", value, onChange, error, ...props }) {
    try {
        return (
            <div className="form-group" data-name="form-input">
                <label className="form-label">{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="form-input"
                    {...props}
                />
                {error && <div className="form-error">{error}</div>}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
