import './Follow.css'
const Follow = ({ sessionUser }) => {
    
    return (
        <>
        {!sessionUser && 
            <div className="tooltip tooltiptext">
                <span className="tooltiptext">You must be logged in to Follow</span>
                <button className="confirmButtonDesign notAllowed">Follow</button>
                
            </div>
        }  
        {

        }
        </>
        
    )
}

export default Follow;