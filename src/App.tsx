import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ColorModeProvider from "./shared/ColorModeProvider";

// import { Gradient } from "./shared/Gradient";

function App() {
  return (
    <>
      <ColorModeProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Router>
      </ColorModeProvider>
    </>
  );
}

export default App;
