import "./App.css";
import Activity from "./components/Activity";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App relative mb-20">
      <Header />
      <Navbar />
      <main>
        <Card />
        <Services />
        <Activity />
      </main>
    </div>
  );
}

export default App;
