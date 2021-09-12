import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from "./Components/Headers";
import ScroolEvent from "./Pages/ScroolEvent";
import ScrollEvent2 from "./Pages/ScrollEvent2";

function App() {
  return (
    <Router>
      <Headers />

      <Switch>
        <Route exact path="/scrollevent">
          <ScroolEvent />
        </Route>
        <Route exact path="/scrollevent2">
          <ScrollEvent2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
