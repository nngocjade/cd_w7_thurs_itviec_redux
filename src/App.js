<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">

      <PublicNavbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/jobs" render={() => <JobPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        {/* <Route path="/jobs/:id" render={() => <JobDetailPage />} /> */}
      </Switch>
    </div>
  );
}

export default App;
