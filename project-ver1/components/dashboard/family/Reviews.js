function Reviews() {
    try {
        const [reviews, setReviews] = React.useState([
            {
                id: 1,
                studentName: "John Doe",
                rating: 5,
                comment: "Great student, very respectful and eager to learn.",
                date: "2024-01-15"
            }
        ]);

        const renderStars = (rating) => {
            return [...Array(5)].map((_, index) => (
                <i 
                    key={index}
                    className={`fas fa-star ${index < rating ? 'text-warning-main' : 'text-gray-600'}`}
                    data-name={`star-${index + 1}`}
                ></i>
            ));
        };

        return (
            <div className="space-y-6" data-name="family-reviews">
                <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>

                <div className="grid gap-4">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card" data-name={`review-${review.id}`}>
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="font-semibold">{review.studentName}</p>
                                </div>
                                <div className="rating-stars">{renderStars(review.rating)}</div>
                            </div>
                            <p className="text-gray-300 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-400">{formatDate(review.date)}</p>
                        </div>
                    ))}
                </div>

                {reviews.length === 0 && (
                    <div className="text-center text-gray-400 py-8">
                        No reviews yet
                    </div>
                )}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
