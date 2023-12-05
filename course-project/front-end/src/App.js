import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/users' exact><Users /></Route>
        <Route path='/places/new' exact><NewPlace /></Route>
        <Redirect to='/users' />
      </Switch>
    </Router>
  );
};

export default App;
