function formatDate(date) {
    try {
        return new Date(date).toLocaleDateString();
    } catch (error) {
        reportError(error);
        return '';
    }
}

function calculateDuration(startDate, endDate) {
    try {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    } catch (error) {
        reportError(error);
        return 0;
    }
}

function isExpired(date) {
    try {
        return new Date(date) < new Date();
    } catch (error) {
        reportError(error);
        return false;
    }
}
