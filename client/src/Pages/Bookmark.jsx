import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";

import "./NewJourney.css";

const Bookmark = () => {
  let history = useHistory();
  const [bookmark, setBm] = useState([]);
  const user = localStorage.getItem("userId");

  const fetchTourData = async () => {
    const result = await axios.get(
      `http://localhost:5001/api/v1/bookmark/user/${user}`
    );
    const resData = result.data.data;
    setBm(resData);
  };
  const { isLoading } = useQuery("trip", fetchTourData);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/api/v1/bookmark/${id}`);

    setBm(bookmark.filter((tour) => tour.id !== id));
  };

  return (
    <div className="main">
      <h1>Bookmark</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tourList">
          {bookmark.map((tour) => (
            <div className="list-tour">
              <div className="tour" key={tour.id}>
                <div className="picture">
                  <img
                    src={`http://localhost:5001/uploads/${tour.journey.jnImg}`}
                    height="241px"
                  />
                  <p
                    className="drop-bookmark"
                    onClick={() => handleDelete(tour.id)}
                    // style={{ backgroundColor: "#de2a2a", color: "#fff" }}
                  >
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                  </p>
                </div>
                <div className="info-journey">
                  <div className="info-head">
                    <h5
                      onClick={() => {
                        history.push(`/detail/${tour.journey.id}`);
                      }}
                    >
                      {tour.journey.title.substring(0, 50)}...
                    </h5>
                    <Moment
                      format="D MMMM YYYY"
                      withTitle
                      style={{ color: "#BFBFBF", fontSize: 14 }}
                    >
                      {tour.journey.createdAt}
                    </Moment>
                  </div>
                  <p className="desc-text">
                    {ReactHtmlParser(
                      tour.journey.description.substring(0, 100)
                    )}
                    ...
                    <span
                      className="readmore"
                      style={{ color: "#2e86de", fontWeight: 600 }}
                      onClick={() => {
                        history.push(`/detail/${tour.journey.id}`);
                      }}
                    >
                      Read more
                    </span>
                  </p>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
