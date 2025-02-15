function Payments() {
    try {
        const [payments, setPayments] = React.useState({
            incoming: [
                {
                    id: 1,
                    studentName: "John Doe",
                    amount: 1500,
                    status: "paid",
                    date: "2024-01-15",
                    type: "homestay"
                }
            ],
            outgoing: [
                {
                    id: 1,
                    familyName: "Smith Family",
                    amount: 1200,
                    status: "pending",
                    date: "2024-01-20",
                    type: "hosting"
                }
            ],
            summary: {
                totalIncoming: 5000,
                totalOutgoing: 4000,
                pendingIncoming: 1500,
                pendingOutgoing: 1200
            }
        });

        const getStatusBadgeClass = (status) => {
            const classes = {
                paid: "bg-success-main",
                pending: "bg-warning-main",
                failed: "bg-error-main"
            };
            return `status-badge ${classes[status] || "bg-gray-500"}`;
        };

        return (
            <div className="space-y-6" data-name="payments-page">
                <h2 className="text-2xl font-bold mb-6">Payments</h2>

                <div className="card-grid" data-name="payment-summary">
                    <div className="stat-card">
                        <p className="stat-card-title">Total Incoming</p>
                        <p className="stat-card-value">${payments.summary.totalIncoming}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Total Outgoing</p>
                        <p className="stat-card-value">${payments.summary.totalOutgoing}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Pending Incoming</p>
                        <p className="stat-card-value">${payments.summary.pendingIncoming}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-card-title">Pending Outgoing</p>
                        <p className="stat-card-value">${payments.summary.pendingOutgoing}</p>
                    </div>
                </div>

                <div className="dashboard-card" data-name="incoming-payments">
                    <h3 className="text-xl font-semibold mb-4">Incoming Payments</h3>
                    <div className="overflow-x-auto">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.incoming.map(payment => (
                                    <tr key={payment.id}>
                                        <td>{payment.studentName}</td>
                                        <td>${payment.amount}</td>
                                        <td>{payment.type}</td>
                                        <td>
                                            <span className={getStatusBadgeClass(payment.status)}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(payment.date)}</td>
                                        <td>
                                            <button className="btn btn-secondary btn-sm">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="dashboard-card" data-name="outgoing-payments">
                    <h3 className="text-xl font-semibold mb-4">Outgoing Payments</h3>
                    <div className="overflow-x-auto">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Family</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.outgoing.map(payment => (
                                    <tr key={payment.id}>
                                        <td>{payment.familyName}</td>
                                        <td>${payment.amount}</td>
                                        <td>{payment.type}</td>
                                        <td>
                                            <span className={getStatusBadgeClass(payment.status)}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(payment.date)}</td>
                                        <td>
                                            <button className="btn btn-secondary btn-sm">Process</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
