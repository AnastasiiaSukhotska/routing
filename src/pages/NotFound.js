import { Link } from "react-router-dom";

export function NotFound () {
    return (
       <div className="not-found-container">
           <h1>Wrong adress...</h1> 
           <p>Go to <Link to='/'>home page!</Link> </p>
       </div> 
    )
}