import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Nav from './Components/Layout/Nav/Nav';
import Cards from './Components/Cards/Cards';
import Contact from './Components/Forms/Contact';
import Author from './Components/Author/Author';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route path="/Home" component={Author} />
          <Route path="/Protfolio" component={Cards} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
