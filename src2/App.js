import "./App.css";
import "./scss/style.scss";

import { Router } from "@reach/router";
import Wrapper from "./components/Wrapper";
import ViewDetails from "./components/ViewDetails";
import Footer from "./components/Footer";
import AddMusician from "./components/AddMusician";
import UpdateCard from "./components/UpdateCard";


function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper path="/" />
        <ViewDetails path="/musician-info" />
        <AddMusician path="/add-musician" />
        <UpdateCard path="/update" />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
