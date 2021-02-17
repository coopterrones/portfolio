import "./App.scss";
import MainPage from "../MainPage/index";
import Skills from "../../Components/Skills/index";
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
      <MainPage />
      <Element name="skills" className="skills-element">
        <Skills />
      </Element>
    </div>
  );
}

export default App;
