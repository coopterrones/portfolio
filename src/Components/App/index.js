import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route, Switch } from "react-router";
import Grid from "../Grid";
import WorkDetails from "../WorkDetails";
import { useStore } from "../../store";
import { Helmet } from "react-helmet";

function App() {
  const store = useStore((state) => state);

  const sandboxItems = store.sandbox;

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cooper Terrones Design</title>
      </Helmet>
      <Switch>
        <Route exact path="/index.html" component={<MainPage />} />
        <Route exact path="/work" component={<Work />} />
        <Route
          exact
          path="/sandbox"
          component={
            <Grid
              header="This is my sandbox. A safe space to experiment and flex my imagination."
              subheader="A place
          to let my mind wander and grow."
              items={sandboxItems}
            />
          }
        />
        <Route
          exact
          path="/film"
          component={
            <Grid
              header="The beauty of film lies in the finite. The comfort in the imperfection."
              subheader="Film captures the emotion of which a sensor could never recreate."></Grid>
          }
        />
        <Route exact path="/current-projects"></Route>
        <Route
          exact
          path="/work-canoe-club"
          component={<WorkDetails name="Canoe Club" />}
        />
        <Route
          exact
          path="/work-poppn-co"
          component={<WorkDetails name="Poppn Co." />}
        />
      </Switch>
    </div>
  );
}

export default App;
