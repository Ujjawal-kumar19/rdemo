import Navigation from "./components/Navigation/Navigation";
import Homepage from "./components/Homepage/Homepage";
import Aboutme from "./components/About/Aboutme";
import Miniproject from "./components/Mini/Miniproject";
import { Route, Switch, Redirect } from "react-router";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/Aboutme" exact component={Aboutme} />
        <Route path="/Miniproject" exact component={Miniproject} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
