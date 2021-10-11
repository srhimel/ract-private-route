

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping ></Shipping>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
