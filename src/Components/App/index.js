import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route } from "react-router";
import Grid from "../Grid";
import WorkDetails from "../WorkDetails";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/sandbox">
        <Grid />
      </Route>
      <Route exact path="/film"></Route>
      <Route exact path="/current-projects"></Route>
      <Route exact path="/work-canoe-club">
        <WorkDetails name="Canoe Club" />
      </Route>
      <Route exact path="/work-poppn-co">
        <WorkDetails name="Poppn Co." />
      </Route>
    </div>
  );
}

export default App;
