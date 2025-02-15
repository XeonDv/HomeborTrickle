function FileUpload({ label, onFileSelect, accept, error }) {
    try {
        const [preview, setPreview] = React.useState(null);

        const handleFileSelect = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);
                onFileSelect(file);
            }
        };

        return (
            <div className="form-group" data-name="file-upload">
                <label className="form-label">{label}</label>
                <div
                    className="file-upload"
                    onClick={() => document.getElementById('file-input').click()}
                >
                    <input
                        id="file-input"
                        type="file"
                        accept={accept}
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />
                    <i className="fas fa-cloud-upload-alt text-4xl mb-2"></i>
                    <p>Click or drag file to upload</p>
                </div>
                {preview && (
                    <div className="file-preview">
                        <img src={preview} alt="Preview" className="max-w-full h-auto" />
                    </div>
                )}
                {error && <div className="form-error">{error}</div>}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
