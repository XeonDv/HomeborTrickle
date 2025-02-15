function Reviews() {
    try {
        const [reviews, setReviews] = React.useState([
            {
                id: 1,
                rating: 5,
                comment: "Great experience with my homestay family!",
                date: "2024-01-15"
            },
            {
                id: 2,
                rating: 4,
                comment: "Very welcoming and supportive environment",
                date: "2023-12-20"
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
            <div data-name="reviews-section">
                <h2 className="text-2xl font-bold mb-6">My Reviews</h2>
                <div className="space-y-4">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card" data-name={`review-${review.id}`}>
                            <div className="rating-stars" data-name="rating">
                                {renderStars(review.rating)}
                            </div>
                            <p className="mb-2" data-name="comment">{review.comment}</p>
                            <p className="text-sm text-gray-400" data-name="date">
                                {new Date(review.date).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
