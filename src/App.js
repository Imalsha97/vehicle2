import "./App.css";
// import Download from './components/download/Download';
// import Feature from './components/features/Feature';
// import Footer from './components/Footer/Footer';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Subscribe from './components/subscribe/Subscribe';
// import Faq from './components/faq/Faq';
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";

import {
  Navbar,
  Header,
  Features,
  Download,
  Faq,
  Footer,
} from "./components/index";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      
    </>
  );
}

export default App;
