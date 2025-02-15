function validateEmail(email) {
    try {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    } catch (error) {
        reportError(error);
        return false;
    }
}

function validatePassword(password) {
    try {
        return password.length >= 8;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function validateRequired(value) {
    try {
        return value !== null && value !== undefined && value.toString().trim() !== '';
    } catch (error) {
        reportError(error);
        return false;
    }
}

function validatePhone(phone) {
    try {
        const re = /^\+?[\d\s-]{10,}$/;
        return re.test(phone);
    } catch (error) {
        reportError(error);
        return false;
    }
}

function validateDate(date) {
    try {
        const d = new Date(date);
        return !isNaN(d.getTime());
    } catch (error) {
        reportError(error);
        return false;
    }
}
