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
import Profile from './routers/Profile/Profile';
import FavouriteList from "./routers/FavouriteList/FavouriteList";
import ChangePassword from "./routers/ChangePassword/ChangePassword";
import AddHouse from "./routers/AddHouse/AddHouse";
import HouseStatistic from "./routers/HouseStatistic/HouseStatistic";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar isLogged={true} isOwner={true}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Accommodations} />
        <Route path="/product-detail" exact component={AccommodationDetail} />
        <Route path="/services" exact component={Profile} />
        <Route path="/services/favorite-list" exact component={FavouriteList} />
        <Route path="/services/change-password" exact component={ChangePassword} />
        <Route path="/services/add-house" exact component={AddHouse} />
        <Route path="/services/list-house" exact component={HouseStatistic} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
