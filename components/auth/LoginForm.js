function LoginForm({ providerId, onSuccess }) {
    try {
        const [formData, setFormData] = React.useState({
            email: "",
            password: ""
        });

        const [error, setError] = React.useState("");
        const [isLoading, setIsLoading] = React.useState(false);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");
            setIsLoading(true);

            try {
                const session = await login(formData.email, formData.password, providerId);
                if (onSuccess) {
                    onSuccess(session);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div className="max-w-md mx-auto" data-name="login-form">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-name="email-input"
                    />

                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        data-name="password-input"
                    />

                    {error && (
                        <div className="text-error-main text-sm" data-name="error-message">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={isLoading}
                        data-name="submit-button"
                    >
                        {isLoading ? (
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                        ) : (
                            <i className="fas fa-sign-in-alt mr-2"></i>
                        )}
                        Log In
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
