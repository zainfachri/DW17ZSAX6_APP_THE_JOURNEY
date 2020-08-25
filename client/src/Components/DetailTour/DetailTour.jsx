import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Moment from "react-moment";

import ImageTour from "./ImageTour";
import "./DetailTour.css";

import a1 from "../../img/tour/a1.png";
import a2 from "../../img/tour/a2.png";
import a3 from "../../img/tour/a3.png";
import a4 from "../../img/tour/a4.png";

const DetailTour = () => {
  const [detailTrip, setDetailTrip] = useState([]);
  const { id } = useParams();
  const user = localStorage.getItem("userId");
  const fetchTourData = async () => {
    const result = await axios.get(
      `http://localhost:5001/api/v1/journey/${id}`
    );
    const resData = result.data.data;

    setDetailTrip(resData);
  };
  const { isLoading } = useQuery("trip", fetchTourData);

  return (
    <div className="container detail">
      {/* {isLoading ? ( */}
      {isLoading || !detailTrip || !detailTrip?.user ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="detail-title" key={detailTrip.id}>
            <div className="detail-journey">
              <h1>{detailTrip.title}</h1>
              <h3 style={{ textAlign: "right", paddingTop: 20 }}>
                {detailTrip.user.fullName}
              </h3>
            </div>
            <p style={{ fontSize: 22, color: "#3B97D3", fontWeight: "500" }}>
              <Moment format="D MMMM YYYY" withTitle>
                {detailTrip.createdAt}
              </Moment>
            </p>
          </div>
          <ImageTour detailTrip={detailTrip} />
        </>
      )}
    </div>
  );
};

export default DetailTour;
