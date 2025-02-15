function AdditionalInfo({ onNext, onBack }) {
    try {
        const [formData, setFormData] = React.useState({
            dateOfBirth: "",
            gender: "",
            phone: "",
            originLanguage: "",
            countryOfResidence: "",
            agency: "",
            school: "",
            accommodation: "single",
            mealPlan: "3meals",
            preferences: {
                smokers: false,
                children: false,
                teenagers: false,
                pets: false
            },
            healthInfo: {
                treatment: false,
                mentalPhysical: false
            },
            emergency: {
                name: "",
                phone: ""
            }
        });

        const [errors, setErrors] = React.useState({});

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            
            if (name.includes('.')) {
                const [parent, child] = name.split('.');
                setFormData(prev => ({
                    ...prev,
                    [parent]: {
                        ...prev[parent],
                        [child]: type === 'checkbox' ? checked : value
                    }
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: type === 'checkbox' ? checked : value
                }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const newErrors = {};
            if (!validateRequired(formData.dateOfBirth)) newErrors.dateOfBirth = "Date of birth is required";
            if (!validateRequired(formData.gender)) newErrors.gender = "Gender is required";
            if (!validatePhone(formData.phone)) newErrors.phone = "Valid phone number is required";
            if (!validateRequired(formData.emergency.name)) newErrors.emergencyName = "Emergency contact name is required";
            if (!validatePhone(formData.emergency.phone)) newErrors.emergencyPhone = "Valid emergency contact phone is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            try {
                // Save to local storage or API
                setLocalStorage('studentAdditionalInfo', formData);
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="additional-info-section">
                <ProgressBar currentStep={2} totalSteps={3} />
                <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormInput
                        type="date"
                        label="Date of Birth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        error={errors.dateOfBirth}
                        data-name="dob-input"
                    />

                    <FormSelect
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "Select Gender" },
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            { value: "other", label: "Other" }
                        ]}
                        error={errors.gender}
                        data-name="gender-select"
                    />

                    <FormInput
                        type="tel"
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        data-name="phone-input"
                    />

                    <FormInput
                        label="Origin Language"
                        name="originLanguage"
                        value={formData.originLanguage}
                        onChange={handleChange}
                        data-name="language-input"
                    />

                    <FormInput
                        label="Country of Residence"
                        name="countryOfResidence"
                        value={formData.countryOfResidence}
                        onChange={handleChange}
                        data-name="country-input"
                    />

                    <FormInput
                        label="Agency (Optional)"
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}
                        data-name="agency-input"
                    />

                    <FormInput
                        label="School of Attendance"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        data-name="school-input"
                    />

                    <FormSelect
                        label="Accommodation Preference"
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                        options={[
                            { value: "single", label: "Single Room" },
                            { value: "shared", label: "Shared Room" }
                        ]}
                        data-name="accommodation-select"
                    />

                    <FormSelect
                        label="Meal Plan"
                        name="mealPlan"
                        value={formData.mealPlan}
                        onChange={handleChange}
                        options={[
                            { value: "3meals", label: "3 Meals per day" },
                            { value: "2meals", label: "2 Meals per day" },
                            { value: "noMeals", label: "No Meals" }
                        ]}
                        data-name="meal-select"
                    />

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">House Preferences</h3>
                        <FormCheckbox
                            label="Can live with smokers"
                            name="preferences.smokers"
                            checked={formData.preferences.smokers}
                            onChange={handleChange}
                            data-name="smokers-checkbox"
                        />
                        <FormCheckbox
                            label="Can live with children"
                            name="preferences.children"
                            checked={formData.preferences.children}
                            onChange={handleChange}
                            data-name="children-checkbox"
                        />
                        <FormCheckbox
                            label="Can live with teenagers"
                            name="preferences.teenagers"
                            checked={formData.preferences.teenagers}
                            onChange={handleChange}
                            data-name="teenagers-checkbox"
                        />
                        <FormCheckbox
                            label="Can live with pets"
                            name="preferences.pets"
                            checked={formData.preferences.pets}
                            onChange={handleChange}
                            data-name="pets-checkbox"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Health Information</h3>
                        <FormCheckbox
                            label="Currently under treatment or medication"
                            name="healthInfo.treatment"
                            checked={formData.healthInfo.treatment}
                            onChange={handleChange}
                            data-name="treatment-checkbox"
                        />
                        <FormCheckbox
                            label="Have mental or physical condition"
                            name="healthInfo.mentalPhysical"
                            checked={formData.healthInfo.mentalPhysical}
                            onChange={handleChange}
                            data-name="condition-checkbox"
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Emergency Contact</h3>
                        <FormInput
                            label="Contact Name"
                            name="emergency.name"
                            value={formData.emergency.name}
                            onChange={handleChange}
                            error={errors.emergencyName}
                            data-name="emergency-name-input"
                        />
                        <FormInput
                            type="tel"
                            label="Contact Phone"
                            name="emergency.phone"
                            value={formData.emergency.phone}
                            onChange={handleChange}
                            error={errors.emergencyPhone}
                            data-name="emergency-phone-input"
                        />
                    </div>

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
