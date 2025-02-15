function Uploads({ onComplete, onBack }) {
    try {
        const [files, setFiles] = React.useState({
            profile: null,
            passport: null,
            visa: null,
            flight: null
        });

        const [agreement, setAgreement] = React.useState(false);
        const [errors, setErrors] = React.useState({});

        const handleFileUpload = async (type, file) => {
            try {
                const result = await uploadFile(file, type);
                setFiles(prev => ({
                    ...prev,
                    [type]: result.url
                }));
            } catch (error) {
                setErrors(prev => ({
                    ...prev,
                    [type]: error.message
                }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!agreement) {
                setErrors(prev => ({
                    ...prev,
                    agreement: "You must agree to the terms and conditions"
                }));
                return;
            }
            if (!files.profile || !files.passport) {
                setErrors(prev => ({
                    ...prev,
                    files: "Profile picture and passport are required"
                }));
                return;
            }
            onComplete();
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="uploads-section">
                <ProgressBar currentStep={3} totalSteps={3} />
                <h2 className="text-2xl font-bold mb-6">Document Uploads</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FileUpload
                        label="Profile Picture (Required)"
                        onFileSelect={(file) => handleFileUpload('profile', file)}
                        accept="image/*"
                        error={errors.profile}
                        data-name="profile-upload"
                    />

                    <FileUpload
                        label="Passport (Required)"
                        onFileSelect={(file) => handleFileUpload('passport', file)}
                        accept=".pdf,image/*"
                        error={errors.passport}
                        data-name="passport-upload"
                    />

                    <FileUpload
                        label="Visa (Optional)"
                        onFileSelect={(file) => handleFileUpload('visa', file)}
                        accept=".pdf,image/*"
                        error={errors.visa}
                        data-name="visa-upload"
                    />

                    <FileUpload
                        label="Flight Ticket (Optional)"
                        onFileSelect={(file) => handleFileUpload('flight', file)}
                        accept=".pdf,image/*"
                        error={errors.flight}
                        data-name="flight-upload"
                    />

                    <FormCheckbox
                        label="I agree to the terms and conditions"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                        error={errors.agreement}
                        data-name="agreement-checkbox"
                    />

                    {errors.files && <div className="form-error">{errors.files}</div>}

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
                            data-name="complete-button"
                        >
                            Complete Registration
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
