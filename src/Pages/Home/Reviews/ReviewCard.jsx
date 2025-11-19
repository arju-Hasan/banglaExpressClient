import React from 'react';

const ReviewCard = ({ review }) => {

    const { 
        userName,
        user_email,
        delivery_email,
        pick_up_email,
        user_photoURL,
        ratings,
        review: reviewText,   // rename to avoid conflict
        parcel_id,
        date,
    } = review;

    // Format date
    const formattedDate = date
        ? new Date(date).toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
          })
        : "";

    // Rating stars
    const rounded = Math.round(ratings * 2) / 2;
    const fullStars = Math.floor(rounded);
    const halfStar = rounded % 1 !== 0;

    return (
        <article className="max-w-xl w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm p-4 flex gap-4 items-start ">

            {/* Avatar */}
            <img
                src={user_photoURL}
                alt={`${userName || "User"} avatar`}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border border-gray-100 dark:border-slate-700"
            />

            {/* Content */}
            <div className="flex-1">

                {/* Header */}
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {userName}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-300">
                            {user_email}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400">{formattedDate}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                            Parcel: <span className="font-medium">{parcel_id}</span>
                        </p>
                    </div>
                </div>

                {/* Pickup & Delivery */}
                <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                        Pickup: {pick_up_email}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        Delivery: {delivery_email}
                    </span>
                </div>

                {/* Ratings */}
                <div className="mt-4 flex items-start gap-3">
                    <div className="flex items-center gap-1">

                        {/* Full Stars */}
                        {Array.from({ length: fullStars }).map((_, i) => (
                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.169L12 18.897l-7.336 3.87 1.402-8.17L.132 9.21l8.2-1.192z" />
                            </svg>
                        ))}

                        {/* Half Star */}
                        {halfStar && (
                            <svg width="18" height="18" viewBox="0 0 24 24" className="text-yellow-500">
                                <defs>
                                    <linearGradient id="half">
                                        <stop offset="50%" stopColor="currentColor" />
                                        <stop offset="50%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.169L12 18.897l-7.336 3.87 1.402-8.17L.132 9.21l8.2-1.192z"
                                    fill="url(#half)"
                                />
                            </svg>
                        )}

                        {/* Empty Stars */}
                        {Array.from({ length: 5 - Math.ceil(rounded) }).map((_, i) => (
                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-300 dark:text-slate-600">
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.169L12 18.897l-7.336 3.87 1.402-8.17L.132 9.21l8.2-1.192z" />
                            </svg>
                        ))}

                    </div>

                    <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            {ratings} / 5
                        </p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                            {reviewText}
                        </p>
                    </div>
                </div>

            </div>

        </article>
    );
};

export default ReviewCard;
