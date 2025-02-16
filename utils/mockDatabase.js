const mockDatabase = {
    providers: [
        {
            id: "homestayplus",
            name: "HomestayPlus",
            subdomain: "homestayplus",
            logo: "fas fa-home",
            description: "Leading homestay provider in Vancouver",
            primaryColor: "#6c2bd9",
            welcomeText: "Welcome to HomestayPlus",
            contact: {
                email: "info@homestayplus.com",
                phone: "+1 (555) 123-4567",
                address: "123 Main St, Vancouver, BC"
            },
            users: [
                {
                    id: "hp-admin-1",
                    email: "admin@homestayplus.com",
                    password: "hp123456", // In real app, this would be hashed
                    role: "manager",
                    name: "John Manager"
                },
                {
                    id: "hp-coord-1",
                    email: "coord@homestayplus.com",
                    password: "hp123456",
                    role: "coordinator",
                    name: "Sarah Coordinator"
                }
            ]
        },
        {
            id: "ihomestay",
            name: "iHomestay",
            subdomain: "ihomestay",
            logo: "fas fa-building",
            description: "International homestay network",
            primaryColor: "#2563eb",
            welcomeText: "Welcome to iHomestay",
            contact: {
                email: "info@ihomestay.com",
                phone: "+1 (555) 234-5678",
                address: "456 Oak St, Toronto, ON"
            },
            users: [
                {
                    id: "ih-admin-1",
                    email: "admin@ihomestay.com",
                    password: "ih123456",
                    role: "manager",
                    name: "Mike Manager"
                }
            ]
        }
    ],
    students: [],
    families: [],
    registrations: []
};

async function queryDatabase(collection, query = {}) {
    try {
        const data = mockDatabase[collection] || [];
        return data.filter(item => {
            for (let key in query) {
                if (item[key] !== query[key]) return false;
            }
            return true;
        });
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function insertData(collection, data) {
    try {
        if (!mockDatabase[collection]) {
            mockDatabase[collection] = [];
        }
        mockDatabase[collection].push(data);
        return data;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateData(collection, id, data) {
    try {
        const index = mockDatabase[collection].findIndex(item => item.id === id);
        if (index !== -1) {
            mockDatabase[collection][index] = { ...mockDatabase[collection][index], ...data };
            return mockDatabase[collection][index];
        }
        throw new Error('Item not found');
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function deleteData(collection, id) {
    try {
        const index = mockDatabase[collection].findIndex(item => item.id === id);
        if (index !== -1) {
            mockDatabase[collection].splice(index, 1);
            return true;
        }
        throw new Error('Item not found');
    } catch (error) {
        reportError(error);
        throw error;
    }
}
