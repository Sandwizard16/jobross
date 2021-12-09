import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Home from "./components/pages/home/home";
import Single from "./components/single";
import PostJob from "./components/postJob";
import Settings from "./components/settings";
import "./App.css";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/pages/home/test";
import Splash from "./components/pages/home/spashpage";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Splash></Splash>
          </Route>
          <Route exact path="/job-posts">
            {<Home />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login></Login>}
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register></Register>}
          </Route>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/post-job">
            {user ? <PostJob></PostJob> : <Home></Home>}
          </Route>
          <Route exact path="/jobs/:jobId">
            <Single></Single>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
