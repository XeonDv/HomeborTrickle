function FormCheckbox({ label, checked, onChange, error, ...props }) {
    try {
        return (
            <div className="form-group" data-name="form-checkbox">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        className="form-checkbox"
                        {...props}
                    />
                    <span className="ml-2">{label}</span>
                </label>
                {error && <div className="form-error">{error}</div>}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
