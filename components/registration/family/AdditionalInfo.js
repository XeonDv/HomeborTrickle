function AdditionalInfo({ onNext, onBack }) {
    try {
        const [formData, setFormData] = React.useState({
            phone: "",
            experience: "",
            address: "",
            background: "",
            backgroundLanguage: "",
            pets: "",
            agePreference: "",
            genderPreference: "",
            foodService: false,
            specialDiet: false
        });

        const [errors, setErrors] = React.useState({});

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const newErrors = {};
            if (!validatePhone(formData.phone)) newErrors.phone = "Valid phone number is required";
            if (!validateRequired(formData.address)) newErrors.address = "Address is required";
            if (!validateRequired(formData.background)) newErrors.background = "Background information is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            try {
                setLocalStorage('familyAdditionalInfo', formData);
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="additional-info-section">
                <ProgressBar currentStep={2} totalSteps={5} />
                <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        type="tel"
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                    />

                    <FormInput
                        label="Experience as Homestay"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g., 2 years hosting international students"
                    />

                    <FormInput
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        error={errors.address}
                    />

                    <FormInput
                        label="Background"
                        name="background"
                        value={formData.background}
                        onChange={handleChange}
                        error={errors.background}
                        placeholder="e.g., Teaching, Healthcare, etc."
                    />

                    <FormInput
                        label="Background Language"
                        name="backgroundLanguage"
                        value={formData.backgroundLanguage}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Pets"
                        name="pets"
                        value={formData.pets}
                        onChange={handleChange}
                        placeholder="e.g., 1 dog, 2 cats"
                    />

                    <FormSelect
                        label="Age Preference"
                        name="agePreference"
                        value={formData.agePreference}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Select Age Preference" },
                            { value: "16-18", label: "16-18 years" },
                            { value: "19-25", label: "19-25 years" },
                            { value: "26+", label: "26+ years" },
                            { value: "any", label: "Any age" }
                        ]}
                    />

                    <FormSelect
                        label="Gender Preference"
                        name="genderPreference"
                        value={formData.genderPreference}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Select Gender Preference" },
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            { value: "any", label: "Any" }
                        ]}
                    />

                    <FormCheckbox
                        label="Food Service (Students can use kitchen)"
                        name="foodService"
                        checked={formData.foodService}
                        onChange={handleChange}
                    />

                    <FormCheckbox
                        label="Special Diet Accommodation"
                        name="specialDiet"
                        checked={formData.specialDiet}
                        onChange={handleChange}
                    />

                    {errors.submit && <div className="form-error">{errors.submit}</div>}

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onBack}
                            className="btn btn-secondary"
                        >
                            Back
                        </button>
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
