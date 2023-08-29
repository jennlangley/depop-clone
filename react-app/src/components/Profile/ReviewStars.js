const ReviewStars = ({ avgRating }) => {
    const stars = Math.ceil(avgRating);
    
    return (
        <div className="reviewStars">
            {[...Array(5)].map((star, idx) => {  
                idx++      
                return (    
                <span
                    key={idx}
                    className={idx < (stars) ? "active" : "inactive"}
                >
                <span className="star">
                    <i className="rating__star fas fa-star"></i>
                </span>  
                </span>      
                );
            })}
        </div>
    )
}

export default ReviewStars;