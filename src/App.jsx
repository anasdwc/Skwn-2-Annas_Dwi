import { Route, Switch } from "react-router-dom";
import "./App.css";
import Activity from "./components/Activity";
import Card from "./components/Card";
import Header from "./components/Header";
import HeaderAbout from "./components/HeaderAbout";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <div className="App relative mb-20">
        <Switch>
          <Route exact path="/">
            <div id="home">
              <Header />
              <Navbar />
              <main>
                <Card />
                <Services />
                <Activity />
              </main>
            </div>
          </Route>
          <Route path="/about">
            <HeaderAbout />
            <main>
              <Statistics />
              <Activity text="History" />
            </main>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
