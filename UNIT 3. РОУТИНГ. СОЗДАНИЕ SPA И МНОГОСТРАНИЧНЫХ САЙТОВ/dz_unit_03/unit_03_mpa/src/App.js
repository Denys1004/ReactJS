import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error from './Error';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const mainNav = [
  { "link":"/", "text":"Главная", "id":1},	
  { "link":"/about", "text":"О сайте", "id":2 },	
  { "link":"/cat", "text":"Категории", "id":3 },
]
// nav работает, а вот для категорий к сожалению не доходит до меня как передать данные.

function App() {
  return (
    <>
      <Header data={mainNav}/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/cat" component={Category}/>
          <Route path="/cat/:catDesc" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
