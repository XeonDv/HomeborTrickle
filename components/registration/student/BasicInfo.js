function BasicInfo({ onNext }) {
    try {
        const [formData, setFormData] = React.useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            stayDates: {
                start: "",
                end: ""
            },
            destinationCity: ""
        });

        const [errors, setErrors] = React.useState({});

        const handleChange = (e) => {
            const { name, value } = e.target;
            
            if (name.includes('.')) {
                const [parent, child] = name.split('.');
                setFormData(prev => ({
                    ...prev,
                    [parent]: {
                        ...prev[parent],
                        [child]: value
                    }
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const newErrors = {};
            if (!validateRequired(formData.name)) newErrors.name = "Name is required";
            if (!validateEmail(formData.email)) newErrors.email = "Valid email is required";
            if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 8 characters";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
            if (!validateDate(formData.stayDates.start)) newErrors.startDate = "Start date is required";
            if (!validateDate(formData.stayDates.end)) newErrors.endDate = "End date is required";
            if (!validateRequired(formData.destinationCity)) newErrors.destinationCity = "Destination city is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            try {
                // Save to local storage or API
                setLocalStorage('studentBasicInfo', formData);
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="basic-info-section">
                <ProgressBar currentStep={1} totalSteps={3} />
                <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        data-name="name-input"
                    />

                    <FormInput
                        type="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        data-name="email-input"
                    />

                    <FormInput
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                        data-name="password-input"
                    />

                    <FormInput
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                        data-name="confirm-password-input"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <FormInput
                            type="date"
                            label="Start Date"
                            name="stayDates.start"
                            value={formData.stayDates.start}
                            onChange={handleChange}
                            error={errors.startDate}
                            data-name="start-date-input"
                        />

                        <FormInput
                            type="date"
                            label="End Date"
                            name="stayDates.end"
                            value={formData.stayDates.end}
                            onChange={handleChange}
                            error={errors.endDate}
                            data-name="end-date-input"
                        />
                    </div>

                    <FormInput
                        label="Destination City"
                        name="destinationCity"
                        value={formData.destinationCity}
                        onChange={handleChange}
                        error={errors.destinationCity}
                        data-name="city-input"
                    />

                    {errors.submit && <div className="form-error">{errors.submit}</div>}

                    <div className="flex justify-end">
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
