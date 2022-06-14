import { Link } from "react-router-dom";
import '../App.css';
export function PresentationCards () {
    return (
     <>
        <div className='card'>
         <h1>My list of contacts</h1>
         <p>You can look at list my contacts or edit them <Link to='/contacts'>here</Link> </p>
        </div>
         <div className='card'>
         <h1>My list of plans</h1>
         <p>You can look at list of my things-to-do or edit them <Link to='/todo'>here</Link> </p>
        </div>
     </>
    )
}