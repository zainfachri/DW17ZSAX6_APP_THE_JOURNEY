import React from "react";

import Header from "../Components/Header/Header";
// import Benefit from "../DataTour/Benefit";
import Content from "../Components/Content/Content";
// import TourData from "../DataTour/TourData";
import Tour from "../Components/Content/Tour";

const Home = ({ setModalLogin }) => {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {!token && <Header />}

      <div className="main">
        <h1>Journey</h1>
        <Tour setModalLogin={setModalLogin} />
      </div>
    </div>
  );
};
export default Home;
