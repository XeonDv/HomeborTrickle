function Reviews() {
    try {
        const [reviews, setReviews] = React.useState({
            student: [
                {
                    id: 1,
                    studentName: "John Doe",
                    familyName: "Smith Family",
                    rating: 4,
                    comment: "Great experience with the family!",
                    date: "2024-01-15"
                }
            ],
            family: [
                {
                    id: 1,
                    familyName: "Smith Family",
                    studentName: "John Doe",
                    rating: 5,
                    comment: "Wonderful student, very respectful.",
                    date: "2024-01-16"
                }
            ]
        });

        const renderStars = (rating) => {
            return [...Array(5)].map((_, index) => (
                <i 
                    key={index}
                    className={`fas fa-star ${index < rating ? 'text-warning-main' : 'text-gray-600'}`}
                ></i>
            ));
        };

        return (
            <div className="space-y-6" data-name="reviews-page">
                <h2 className="text-2xl font-bold mb-6">Reviews & Feedback</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="dashboard-card" data-name="student-reviews">
                        <h3 className="text-xl font-semibold mb-4">Student Reviews</h3>
                        <div className="space-y-4">
                            {reviews.student.map(review => (
                                <div key={review.id} className="review-card">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="font-semibold">{review.studentName}</p>
                                            <p className="text-sm text-gray-400">to {review.familyName}</p>
                                        </div>
                                        <div className="rating-stars">{renderStars(review.rating)}</div>
                                    </div>
                                    <p className="text-gray-300 mb-2">{review.comment}</p>
                                    <p className="text-sm text-gray-400">{formatDate(review.date)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card" data-name="family-reviews">
                        <h3 className="text-xl font-semibold mb-4">Family Reviews</h3>
                        <div className="space-y-4">
                            {reviews.family.map(review => (
                                <div key={review.id} className="review-card">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="font-semibold">{review.familyName}</p>
                                            <p className="text-sm text-gray-400">to {review.studentName}</p>
                                        </div>
                                        <div className="rating-stars">{renderStars(review.rating)}</div>
                                    </div>
                                    <p className="text-gray-300 mb-2">{review.comment}</p>
                                    <p className="text-sm text-gray-400">{formatDate(review.date)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
