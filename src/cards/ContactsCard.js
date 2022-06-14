import { Link } from "react-router-dom";
import '../App.css';
export function ContactsCard () {
    return (
        <div className='card'>
         <h1>My list of contacts</h1>
         <p>You can look at list my contacts or edit them <Link to='/contacts'>here</Link> </p>
        </div>
    )
}