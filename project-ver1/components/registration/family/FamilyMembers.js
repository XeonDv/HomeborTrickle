function FamilyMembers({ onNext, onBack }) {
    try {
        const [principal, setPrincipal] = React.useState({
            name: "",
            dateOfBirth: "",
            gender: "",
            occupation: "",
            backgroundCheckDate: "",
            backgroundExpiry: "",
            physicalCondition: ""
        });

        const [members, setMembers] = React.useState([]);
        const [errors, setErrors] = React.useState({});

        const handlePrincipalChange = (e) => {
            const { name, value } = e.target;
            setPrincipal(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleAddMember = () => {
            setMembers(prev => [...prev, {
                name: "",
                dateOfBirth: "",
                gender: "",
                occupation: "",
                backgroundCheckDate: "",
                backgroundExpiry: "",
                physicalCondition: ""
            }]);
        };

        const handleMemberChange = (index, field, value) => {
            setMembers(prev => prev.map((member, i) =>
                i === index ? { ...member, [field]: value } : member
            ));
        };

        const handleRemoveMember = (index) => {
            setMembers(prev => prev.filter((_, i) => i !== index));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const newErrors = {};
            if (!validateRequired(principal.name)) newErrors.principalName = "Principal name is required";
            if (!validateRequired(principal.dateOfBirth)) newErrors.principalDob = "Date of birth is required";
            if (!validateRequired(principal.gender)) newErrors.principalGender = "Gender is required";
            if (!validateRequired(principal.backgroundCheckDate)) newErrors.principalBackgroundDate = "Background check date is required";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }

            try {
                setLocalStorage('familyMembers', {
                    principal,
                    members
                });
                onNext();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        const renderMemberForm = (data, index, isPrincipal = false) => (
            <div className="space-y-4" data-name={isPrincipal ? "principal-form" : `member-form-${index}`}>
                <FormInput
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "name", e.target.value)}
                    error={isPrincipal ? errors.principalName : null}
                />
                <FormInput
                    type="date"
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={data.dateOfBirth}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "dateOfBirth", e.target.value)}
                    error={isPrincipal ? errors.principalDob : null}
                />
                <FormSelect
                    label="Gender"
                    name="gender"
                    value={data.gender}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "gender", e.target.value)}
                    options={[
                        { value: "", label: "Select Gender" },
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" }
                    ]}
                    error={isPrincipal ? errors.principalGender : null}
                />
                <FormInput
                    label="Occupation"
                    name="occupation"
                    value={data.occupation}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "occupation", e.target.value)}
                />
                <FormInput
                    type="date"
                    label="Background Check Date"
                    name="backgroundCheckDate"
                    value={data.backgroundCheckDate}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "backgroundCheckDate", e.target.value)}
                    error={isPrincipal ? errors.principalBackgroundDate : null}
                />
                <FormInput
                    type="date"
                    label="Background Check Expiry"
                    name="backgroundExpiry"
                    value={data.backgroundExpiry}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "backgroundExpiry", e.target.value)}
                />
                <FormInput
                    label="Physical or Mental Condition"
                    name="physicalCondition"
                    value={data.physicalCondition}
                    onChange={isPrincipal ? handlePrincipalChange : (e) => handleMemberChange(index, "physicalCondition", e.target.value)}
                />
            </div>
        );

        return (
            <div className="max-w-2xl mx-auto" data-name="family-members-section">
                <ProgressBar currentStep={3} totalSteps={5} />
                <h2 className="text-2xl font-bold mb-6">Family Members</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="dashboard-card">
                        <h3 className="text-xl font-semibold mb-4">Principal Householder</h3>
                        {renderMemberForm(principal, null, true)}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Other Family Members</h3>
                        {members.map((member, index) => (
                            <div key={index} className="dashboard-card relative">
                                {renderMemberForm(member, index)}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMember(index)}
                                    className="absolute top-4 right-4 text-error-main"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddMember}
                            className="btn btn-secondary w-full"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Add Family Member
                        </button>
                    </div>

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
