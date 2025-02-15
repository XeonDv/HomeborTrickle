async function login(email, password) {
    try {
        const [user] = await queryDatabase('users', { email });
        if (!user) {
            throw new Error('Invalid credentials');
        }
        
        const passwordMatch = await verifyPassword(password, user.password_hash);
        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        const session = {
            userId: user.id,
            providerId: user.provider_id,
            role: user.role,
            name: user.name,
            email: user.email
        };
        
        setLocalStorage('session', session);
        return session;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function logout() {
    try {
        removeLocalStorage('session');
    } catch (error) {
        reportError(error);
    }
}

async function getCurrentUser() {
    try {
        const session = getLocalStorage('session');
        if (!session) return null;
        
        const [user] = await queryDatabase('users', { id: session.userId });
        return user ? session : null;
    } catch (error) {
        reportError(error);
        return null;
    }
}
const { queryDatabase, verifyPassword } = require('./mockDatabase');
