async function registerStudent(studentData) {
    try {
        const response = await fetch('/api/students/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }

        return await response.json();
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function uploadFile(file, type) {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }

        return await response.json();
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function getStudentProfile(studentId) {
    try {
        const response = await fetch(`/api/students/${studentId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. description: ${await response.text()}`);
        }

        return await response.json();
    } catch (error) {
        reportError(error);
        throw error;
    }
}
