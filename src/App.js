import React from 'react';
import './App.css';
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import {Provider} from './context'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider>
      <Router>
    <div >
      <Header branding="Contact App" />
      <div className="container">
        <Switch>
      <Route exact path="/" component={Contacts} />
      <Route exact path="/contact/add" component={AddContact} />
      <Route exact path="/contact/edit/:id" component={EditContact} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
