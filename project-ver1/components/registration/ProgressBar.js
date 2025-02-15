function ProgressBar({ currentStep, totalSteps }) {
    try {
        const progress = (currentStep / totalSteps) * 100;

        return (
            <div className="progress-bar" data-name="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
