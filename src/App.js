import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
     <AuthProvider>
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
        <PrivateRoute path='/service'>
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path='/serviceDetails/:servicId'>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/signIn'>
          <SignIn></SignIn>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
