// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./zero_blog/Home";
import LayoutZero from "./zero_blog/LayoutZero";
import Login from "./zero_blog/Login";
import Register from "./zero_blog/Register";
import Profile from "./zero_blog/Profile";
import Career from "./zero_blog/Career";
import Project from "./zero_blog/Project";
import ProjectStudent from "./zero_blog/ProjectStudent";
import ProjectPtt from "./zero_blog/ProjectPtt";

function App() {
  return (
    // router
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route element={<LayoutZero />}>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
          <Route path="/Profile" Component={Profile} />
          <Route path="/Career" Component={Career} />
          <Route path="/Project" Component={Project} />
          <Route path="/ProjectStudent" Component={ProjectStudent} />
          <Route path="/ProjectPtt" Component={ProjectPtt} />
        </Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
