import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import PrivateUser from "./Components/PrivateRoute/PrivateUser";
import PrivateAdmin from "./Components/PrivateRoute/PrivateAdmin";
import DetailTour from "./Components/DetailTour/DetailTour";
import Bookmark from "./Pages/Bookmark";
import NewJourney from "./Pages/NewJourney";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile";
import AddTrip from "./Components/AddTrip/AddTrip";

import ScrollTop from "./Components/utility/ScrollTop";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const handleLogin = () => {
    setLogin(!isLogin);
    setModalLogin(false);
    setModalRegister(false);
  };

  return (
    <Router>
      <Navbar
        isLogin={isLogin}
        setModalLogin={setModalLogin}
        setModalRegister={setModalRegister}
        handleLogin={handleLogin}
      />
      {modalLogin && (
        <Login
          setModalLogin={setModalLogin}
          setModalRegister={setModalRegister}
          handleLogin={handleLogin}
        />
      )}
      {modalRegister && (
        <Register
          setModalRegister={setModalRegister}
          setModalLogin={setModalLogin}
          handleLogin={handleLogin}
        />
      )}
      <ScrollTop>
        <Switch>
          <Route exact path="/">
            <Home setModalLogin={setModalLogin} />
          </Route>

          <Route exact path="/detail/:id">
            <DetailTour setModalLogin={setModalLogin} />
          </Route>

          <PrivateUser exact path="/new-journey" component={NewJourney} />
          <PrivateUser exact path="/bookmark" component={Bookmark} />
          <PrivateUser exact path="/profile" component={Profile} />

          <PrivateAdmin exact path="/add-trip" component={AddTrip} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;
