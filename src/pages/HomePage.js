import { PresentationCards } from "../cards/PresentationCards";
export function HomePage () {
    return (
    <>
        <header className='header-container'>
         <h1 className='main-title'>This is my app</h1>
        </header>
        <div className='cardsContainer'>
         <PresentationCards className='card'/>
        </div>
    </>
    )
}