import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Appointment from './componants/Appointment/Appointment/Appointment';
import Contact from './componants/Contact/Contact';
import Home from './componants/Home/Home/Home';
import Login from './componants/Login/LogIn/Login';
import PrivateRoute from './componants/Login/PrivateRoute/PrivateRoute';
import Register from './componants/Login/Register/Register';
import NotFound from './componants/NotFOund/NotFound';
import Footer from './componants/Shared/Footer/Footer';
import Header from './componants/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
    
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/appointment/:serviceId">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>     
      </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
