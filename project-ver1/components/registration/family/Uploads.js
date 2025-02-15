function Uploads({ onComplete, onBack }) {
    try {
        const [files, setFiles] = React.useState({
            familyPhoto: null,
            housePhotos: [],
            agreement: false
        });

        const [errors, setErrors] = React.useState({});

        const handleFileUpload = async (type, file) => {
            try {
                const result = await uploadFile(file, type);
                if (type === 'housePhotos') {
                    setFiles(prev => ({
                        ...prev,
                        housePhotos: [...prev.housePhotos, result.url]
                    }));
                } else {
                    setFiles(prev => ({
                        ...prev,
                        [type]: result.url
                    }));
                }
            } catch (error) {
                setErrors(prev => ({
                    ...prev,
                    [type]: error.message
                }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if (!files.agreement) {
                setErrors(prev => ({
                    ...prev,
                    agreement: "You must agree to the terms and conditions"
                }));
                return;
            }

            if (!files.familyPhoto) {
                setErrors(prev => ({
                    ...prev,
                    familyPhoto: "Family photo is required"
                }));
                return;
            }

            try {
                // Save to API and complete registration
                onComplete();
            } catch (error) {
                setErrors({ submit: error.message });
            }
        };

        return (
            <div className="max-w-2xl mx-auto" data-name="uploads-section">
                <ProgressBar currentStep={5} totalSteps={5} />
                <h2 className="text-2xl font-bold mb-6">Document Uploads</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FileUpload
                        label="Family Photo (Required)"
                        onFileSelect={(file) => handleFileUpload('familyPhoto', file)}
                        accept="image/*"
                        error={errors.familyPhoto}
                        data-name="family-photo-upload"
                    />

                    <div className="space-y-4">
                        <label className="form-label">House Photos (Optional)</label>
                        {files.housePhotos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img src={photo} alt={`House photo ${index + 1}`} className="w-full h-40 object-cover rounded" />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setFiles(prev => ({
                                            ...prev,
                                            housePhotos: prev.housePhotos.filter((_, i) => i !== index)
                                        }));
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-error-main rounded-full"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        ))}
                        <FileUpload
                            label="Add House Photo"
                            onFileSelect={(file) => handleFileUpload('housePhotos', file)}
                            accept="image/*"
                            data-name="house-photos-upload"
                        />
                    </div>

                    <FormCheckbox
                        label="I agree to the terms and conditions"
                        checked={files.agreement}
                        onChange={(e) => setFiles(prev => ({...prev, agreement: e.target.checked}))}
                        error={errors.agreement}
                        data-name="agreement-checkbox"
                    />

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
