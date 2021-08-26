import "./styles/App.css";
import { Route, Switch, Link } from "react-router-dom";
import AddPlant from "./components/AddPlant";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PlantList from "./components/PlantList";
import UpdateUser from "./components/UpdateUser";
import { connect } from "react-redux";
import Marketing from "./components/Marketing";
import image from "../src/imgs/succulent.jpg";
import UpdatePlant from "./components/UpdatePlant";
import sun from "./imgs/sun.svg";

function App(props) {
  const { authenticated } = props;

  return (
    <div>
      <header className="Header-bar">
        <img href={sun} className="h-6 w-6 Nav-icon" alt="sun icon"/>
        <nav className="Nav-bar">
          {authenticated ? (
            <>
              <Link>Logout</Link>
              <Link to="/updateuser">Update User</Link>
              <Link to="/plantlist">Plant List</Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/plantlist">
          <PlantList />
        </Route>

        <Route path="/updateuser">
          <UpdateUser />
        </Route>
        
        <Route exact path="/">
          <Marketing />
        </Route>

        {/* <Route path='/plantlist/update/:id'>
          <UpdatePlant />
        </Route> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps)(App);
