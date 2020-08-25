import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import Moment from "react-moment";

const Bookmark = () => {
  const [bookmark, setBm] = useState([]);
  let history = useHistory();
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
                    onClick={() => handleDelete(tour.id)}
                    style={{ backgroundColor: "gold", color: "#fff" }}
                  >
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                  </p>
                </div>
                <div className="info-journey">
                  <div className="info-head">
                    <h5
                      onClick={() => {
                        history.push(`/detail/${tour.journey.id}`);
                      }}
                    >
                      {tour.journey.title}
                    </h5>
                    <Moment
                      format="D MMMM YYYY"
                      withTitle
                      style={{ color: "#BFBFBF", fontSize: 14 }}
                    >
                      {tour.journey.createdAt}
                    </Moment>
                  </div>
                  <p className="desc-text">{tour.journey.description}</p>
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
