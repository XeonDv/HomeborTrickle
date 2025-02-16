async function login(email, password, providerId) {
    try {
        // Query the database for the user
        const sql = `
            SELECT u.*, p.subdomain
            FROM users u
            JOIN providers p ON u.provider_id = p.id
            WHERE u.email = ? AND u.provider_id = ?
            AND u.status = 'active'
        `;
        const users = await query(sql, [email, providerId]);
        const user = users[0];

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // In a real implementation, we would verify the password hash
        // For now, we'll just check the plain text
        if (password !== user.password_hash) {
            throw new Error('Invalid credentials');
        }

        // Create a new session
        const sessionId = crypto.randomUUID();
        const token = btoa(crypto.randomUUID()); // In production, use a proper token generation method
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24); // 24-hour session

        await query(
            'INSERT INTO sessions (id, user_id, token, expires_at) VALUES (?, ?, ?, ?)',
            [sessionId, user.id, token, expiresAt]
        );

        // Return session info
        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                providerId: user.provider_id,
                providerSubdomain: user.subdomain
            }
        };
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function logout(token) {
    try {
        await query('DELETE FROM sessions WHERE token = ?', [token]);
    } catch (error) {
        reportError(error);
    }
}

async function verifySession(token) {
    try {
        const sql = `
            SELECT u.*, s.expires_at, p.subdomain
            FROM sessions s
            JOIN users u ON s.user_id = u.id
            JOIN providers p ON u.provider_id = p.id
            WHERE s.token = ? AND s.expires_at > NOW()
        `;
        const sessions = await query(sql, [token]);
        const session = sessions[0];

        if (!session) {
            return null;
        }

        return {
            user: {
                id: session.user_id,
                name: session.name,
                email: session.email,
                role: session.role,
                providerId: session.provider_id,
                providerSubdomain: session.subdomain
            },
            expiresAt: session.expires_at
        };
    } catch (error) {
        reportError(error);
        return null;
    }
}

async function getProviders() {
    try {
        const sql = 'SELECT id, name, subdomain, description, logo_url, primary_color FROM providers';
        return await query(sql);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
