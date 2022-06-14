
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactsBook } from './ContactsModule/ContactsBook';
import { ToDo } from './TodoModule/ToDo';
import { NotFound } from './pages/NotFound';
import { ContactsCard } from './cards/ContactsCard';
import { ToDoCard } from './cards/ToDoCard';


function App() {
  return (

<Router>
    <Switch>
      <Route path='/contacts' component={ContactsBook} exact></Route>
      <Route path='/todo' component={ToDo} exact></Route>
      <Route path='/' exact>
         <div className="App">
           <header className='header-container'>
             <h1 className='main-title'>This is my app</h1>
            </header>
            <div className='cardsContainer'>
              <ContactsCard className='card'/>
              <ToDoCard className='card'/>
            </div>
         </div>
      </Route>
      <Route path='*' component={NotFound}></Route>
    </Switch>
    </Router>
  );
}

export default App;
