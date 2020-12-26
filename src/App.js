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
      localStorage.setItem("user", JSON.stringify(action.payload.id));
      localStorage.setItem("token", JSON.stringify(action.payload.id));
      localStorage.setItem("role", JSON.stringify(action.payload.roles[0]));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        token: action.payload.id,
        role: action.payload.roles[0],
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
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
          isLogged={state.isAuthenticated}
          isOwner={state.role === "OWNER" ? true : false}
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
        </Switch>
        {state.role === "OWNER" ? (
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
