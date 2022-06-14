
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactsBook } from './ContactsModule/ContactsBook';
import { ToDo } from './TodoModule/ToDo';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';


function App() {
  return (

<Router>
    <Switch>
    <Route path='/' exact>
         <div className="App">
          <HomePage />
         </div>
      </Route>
      <Route path='/contacts' component={ContactsBook} exact></Route>
      <Route path='/todo' component={ToDo} exact></Route>
      <Route path='*' component={NotFound}></Route>
    </Switch>
    </Router>
  );
}

export default App;
