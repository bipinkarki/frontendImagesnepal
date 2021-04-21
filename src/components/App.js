import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Department from "./Department/Department";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import NavBar from "./Core-component/NavBar";
import Footer from "./Core-component/Footer";
import Login from "./Profile/Login";
import Signup from "./Profile/Signup";
import Submitted from "./Submitted/Submitted";
import EditProfile from "./Profile/EditProfile";
import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    const { exp } = decode(token);
    console.log(exp);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
              // state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <NavBar />
            </div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/department" exact component={Department} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/contact" exact component={Contact} />
              <AuthRoute path="/profile" exact component={Profile} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/submitted" exact component={Submitted} />
              <Route path="/edit" exact component={EditProfile} />
            </Switch>
            <div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
