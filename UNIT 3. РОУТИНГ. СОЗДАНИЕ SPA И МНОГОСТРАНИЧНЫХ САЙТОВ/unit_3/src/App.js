import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Users from './Users';
import User_id from './User_id';
import Error from './Error';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={User_id} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
