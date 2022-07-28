import "./App.css";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Topbar from "./Topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SinglePost from "./singlePage/SinglePage";
import Posts from "./pages/posts/Posts";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/Register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
        {/* <Route exact path="/post/:postid" element={<Posts />} /> */}
        <Route exact path="/post/:postid" element={<Single />} />
       
      </Routes>
    </Router>
  );
}

export default App;
