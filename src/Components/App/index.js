import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/sandbox"></Route>
      <Route exact path="/film"></Route>
      <Route exact path="/current-projects"></Route>
    </div>
  );
}

export default App;
