function BasicInfo({ onNext }) {
    try {
        const [formData, setFormData] = React.useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            destinationCity: ""
        });

        const [errors, setErrors] = React.useState({});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const newErrors = {};
            if (!validateRequired(formData.name)) newErrors.name = "Family name is required";
            if (!validateEmail(formData.email)) newErrors.email = "Valid email is required";
            if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 8 characters";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
            if (!validateRequired(formData.destinationCity)) newErrors.destinationCity = "City is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            try {
                setLocalStorage('familyBasicInfo', formData);
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="basic-info-section">
                <ProgressBar currentStep={1} totalSteps={5} />
                <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        label="Family Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="e.g., Smith Family"
                    />

                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />

                    <FormInput
                        label="City"
                        name="destinationCity"
                        value={formData.destinationCity}
                        onChange={handleChange}
                        error={errors.destinationCity}
                    />

                    {errors.submit && <div className="form-error">{errors.submit}</div>}

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="btn btn-primary"
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
