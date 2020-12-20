import React from "react";
import GlobalStyle from './assets/style/globalStyle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from './routers/HomePage/Home';
import Accommodations from './routers/Accommodations/Accommodations';
import Services from './routers/Services/Services';
import SignUp from './routers/SignUp/SignUp';
import ScrollToTop from "./components/ScrollToTop";
import AccommodationDetail from "./routers/AccommodationDetail/AccommodationDetail";
import Login from './routers/Login/Login';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Accommodations} />
        <Route path="/product-detail" exact component={AccommodationDetail} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
