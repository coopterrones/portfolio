import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route } from "react-router";
import Grid from "../Grid";
import WorkDetails from "../WorkDetails";
import { useStore } from "../../store";

function App() {
  const store = useStore((state) => state);

  const sandboxItems = store.sandbox;

  return (
    <div className="App">
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
      <Route exact path="/sandbox">
        <Grid
          header="This is my sandbox. A safe space to experiment and flex my imagination."
          subheader="A place
          to let my mind wander and grow."
          items={sandboxItems}
        />
      </Route>
      <Route exact path="/film">
        <Grid
          header="The beauty of film lies in the finite. The comfort in the imperfection."
          subheader="Film captures the emotion of which a sensor could never recreate."></Grid>
      </Route>
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
