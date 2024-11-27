import React from 'react';

const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-1 star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-3xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default StarRating;
