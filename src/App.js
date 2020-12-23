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
import EditHouse from "./routers/EditHouse/EditHouse";
import Notification from "./routers/Notification/Notification";
import Chat from "./routers/Chat/Chat";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop/>
      <Navbar isLogged={true} isOwner={false}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Accommodations} />
        <Route path="/product-detail" exact component={AccommodationDetail} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/favorite-list" exact component={FavouriteList} />
        <Route path="/profile/change-password" exact component={ChangePassword} />
        <Route path="/add-house" exact component={AddHouse} />
        <Route path="/profile/list-house" exact component={HouseStatistic} />
        <Route path="/profile/edit-house" exact component={EditHouse} />
        <Route path="/profile/notification" exact component={Notification} />
        <Route path="/profile/chat" exact component={Chat} />

        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
