import "./App.css";
import Form from "./components/form";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <section>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/home/:name">
            <Home />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
