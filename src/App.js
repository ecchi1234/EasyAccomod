import React from "react";
import GlobalStyle from './assets/style/globalStyle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from './routers/HomePage/Home';
import Products from './routers/Accommodations/Products';
import Services from './routers/Services/Services';
import SignUp from './routers/SignUp/SignUp';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
