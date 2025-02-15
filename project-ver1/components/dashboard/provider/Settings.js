function Settings() {
    try {
        const [settings, setSettings] = React.useState({
            branding: {
                logo: "",
                colors: {
                    primary: "#6c2bd9",
                    secondary: "#0a0a1a"
                },
                welcomeText: "",
                phone: "",
                email: "",
                address: ""
            },
            notifications: {
                emailAlerts: true,
                smsAlerts: false,
                studentRegistration: true,
                familyRegistration: true,
                payments: true
            },
            security: {
                twoFactorAuth: false,
                passwordExpiry: 90,
                sessionTimeout: 30
            }
        });

        const handleChange = (section, field, value) => {
            setSettings(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                // Save settings
                await updateProviderSettings(settings);
            } catch (error) {
                reportError(error);
            }
        };

        return (
            <div className="space-y-6" data-name="settings-page">
                <h2 className="text-2xl font-bold mb-6">Provider Settings</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="dashboard-card" data-name="branding-section">
                        <h3 className="text-xl font-semibold mb-4">Branding</h3>
                        <div className="space-y-4">
                            <FileUpload
                                label="Logo"
                                onFileSelect={(file) => handleChange('branding', 'logo', file)}
                                accept="image/*"
                            />
                            <FormInput
                                label="Welcome Text"
                                value={settings.branding.welcomeText}
                                onChange={(e) => handleChange('branding', 'welcomeText', e.target.value)}
                            />
                            <FormInput
                                label="Phone"
                                value={settings.branding.phone}
                                onChange={(e) => handleChange('branding', 'phone', e.target.value)}
                            />
                            <FormInput
                                label="Email"
                                value={settings.branding.email}
                                onChange={(e) => handleChange('branding', 'email', e.target.value)}
                            />
                            <FormInput
                                label="Address"
                                value={settings.branding.address}
                                onChange={(e) => handleChange('branding', 'address', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="notifications-section">
                        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
                        <div className="space-y-4">
                            <FormCheckbox
                                label="Email Alerts"
                                checked={settings.notifications.emailAlerts}
                                onChange={(e) => handleChange('notifications', 'emailAlerts', e.target.checked)}
                            />
                            <FormCheckbox
                                label="SMS Alerts"
                                checked={settings.notifications.smsAlerts}
                                onChange={(e) => handleChange('notifications', 'smsAlerts', e.target.checked)}
                            />
                            <FormCheckbox
                                label="Student Registration Notifications"
                                checked={settings.notifications.studentRegistration}
                                onChange={(e) => handleChange('notifications', 'studentRegistration', e.target.checked)}
                            />
                            <FormCheckbox
                                label="Family Registration Notifications"
                                checked={settings.notifications.familyRegistration}
                                onChange={(e) => handleChange('notifications', 'familyRegistration', e.target.checked)}
                            />
                            <FormCheckbox
                                label="Payment Notifications"
                                checked={settings.notifications.payments}
                                onChange={(e) => handleChange('notifications', 'payments', e.target.checked)}
                            />
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="security-section">
                        <h3 className="text-xl font-semibold mb-4">Security</h3>
                        <div className="space-y-4">
                            <FormCheckbox
                                label="Two-Factor Authentication"
                                checked={settings.security.twoFactorAuth}
                                onChange={(e) => handleChange('security', 'twoFactorAuth', e.target.checked)}
                            />
                            <FormSelect
                                label="Password Expiry (days)"
                                value={settings.security.passwordExpiry}
                                onChange={(e) => handleChange('security', 'passwordExpiry', e.target.value)}
                                options={[
                                    { value: 30, label: "30 days" },
                                    { value: 60, label: "60 days" },
                                    { value: 90, label: "90 days" },
                                    { value: 180, label: "180 days" }
                                ]}
                            />
                            <FormSelect
                                label="Session Timeout (minutes)"
                                value={settings.security.sessionTimeout}
                                onChange={(e) => handleChange('security', 'sessionTimeout', e.target.value)}
                                options={[
                                    { value: 15, label: "15 minutes" },
                                    { value: 30, label: "30 minutes" },
                                    { value: 60, label: "1 hour" },
                                    { value: 120, label: "2 hours" }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">
                            Save Changes
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
