import React, { useState, useEffect,  } from "react";
import GlobalStyle from "./assets/style/globalStyle";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./routers/HomePage/Home";
import Accommodations from "./routers/Accommodations/Accommodations";
import SignUp from "./routers/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import AccommodationDetail from "./routers/AccommodationDetail/AccommodationDetail";
import Login from "./routers/Login/Login";
import Profile from "./routers/Profile/Profile";
import FavouriteList from "./routers/FavouriteList/FavouriteList";
import ChangePassword from "./routers/ChangePassword/ChangePassword";
import AddHouse from "./routers/AddHouse/AddHouse";
import HouseStatistic from "./routers/HouseStatistic/HouseStatistic";
import EditHouse from "./routers/EditHouse/EditHouse";
import Notification from "./routers/Notification/Notification";
import Chat from "./routers/Chat/Chat";
import LogOut from "./routers/LogOut/LogOut";

import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

// import function to check if login
import axios from "axios";
import { checkLogin } from "./services/authorize";

// auth context

export const AuthContext = React.createContext(); // added this

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("token", JSON.stringify(action.payload.id));
      localStorage.setItem("role", JSON.stringify(action.payload.role));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: action.payload.id,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://localhost:5000/api/Login/check")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(newMessage);
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar
          isLogged={localStorage.getItem("isLoggedIn")? true : false}
          isOwner={localStorage.getItem("role") === JSON.stringify("OWNER") ? true : false}
          lastName={localStorage.getItem("user") ? JSON.parse(localStorage.user).lastName : "Guest"}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Accommodations} />
          <Route path="/product-detail/:productId" exact component={AccommodationDetail} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/profile/favorite-list"
            exact
            component={FavouriteList}
          />
          <Route
            path="/profile/change-password"
            exact
            component={ChangePassword}
          />
          <Route path="/add-house" exact component={AddHouse} />
          <Route path="/profile/list-house" exact component={HouseStatistic} />
          <Route path="/profile/edit-house" exact component={EditHouse} />
          <Route path="/profile/notification" exact component={Notification} />
          <Route path="/profile/chat" exact component={Chat} />

          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/log-out" exact component={LogOut} />
        </Switch>
        {localStorage.getItem("role") === JSON.stringify("OWNER") ? (
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="Chat với admin"
            subtitle=""
          />
        ) : null}

        <Footer></Footer>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
