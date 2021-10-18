import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div>
     <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/service'>
          <Services></Services>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/signIn'>
          <SignIn></SignIn>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
