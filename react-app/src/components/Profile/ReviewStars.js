
const ReviewStars = ({ avgRating }) => {
    const stars = Math.floor(avgRating);
    
    return (
        <div className="reviewStars">
            {[...Array(5)].map((star, idx) => {  
                idx++      
                return (    
                <span
                    key={idx}
                    className={idx <= (stars) ? "activeStar" : "inactiveStar"}
                >
                    <span className="star">
                        <i className="rating__star fas fa-star"></i>
                    </span>  
                </span>      
                );
            })}
            <span className="avgRating">({avgRating || 0})</span>
        </div>
    )
}

export default ReviewStars;