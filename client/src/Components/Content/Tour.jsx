import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import Moment from "react-moment";
import "./Content.css";
const Tour = ({ setModalLogin }) => {
  let history = useHistory();
  const user = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [trip, setTrip] = useState([]);
  const [saveJn, setJn] = useState({
    bmUserId: user,
    journeyId: "",
  });

  const fetchTourData = async () => {
    const result = await axios.get("http://localhost:5001/api/v1/journey");
    const resData = result.data.data;
    setTrip(resData);
  };
  const { isLoading } = useQuery("trip", fetchTourData);

  const setBookmark = (id) => {
    trip.filter((tour) => tour.id == id);
    setJn({
      ...saveJn,
      journeyId: id,
    });
  };

  const storeBookmark = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5001/api/v1/bookmark",
        saveJn
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    storeBookmark();
  }, []);

  return (
    <div>
      <div class="input-group mb-3 home-search">
        <input type="text" class="form-control" placeholder="Find Journey" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tourList">
          {trip.map((tour) => (
            <div className="list-tour">
              <div className="tour" key={tour.id}>
                <div className="picture">
                  <img
                    src={`http://localhost:5001/uploads/${tour.jnImg}`}
                    height="241px"
                  />
                  {token ? (
                    <span
                      onClick={() => {
                        setBookmark(tour.id);
                        storeBookmark();
                      }}
                    >
                      <p>
                        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                      </p>
                    </span>
                  ) : (
                    <span onClick={() => setModalLogin(true)}>
                      <p>
                        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                      </p>
                    </span>
                  )}
                </div>
                <div className="info-journey">
                  <div className="info-head">
                    <h5
                      onClick={() => {
                        history.push(`/detail/${tour.id}`);
                      }}
                    >
                      {tour.title}
                    </h5>
                    <Moment
                      format="D MMMM YYYY"
                      withTitle
                      style={{ color: "#BFBFBF", fontSize: 14 }}
                    >
                      {tour.createdAt}
                    </Moment>
                  </div>
                  <p className="desc-text">{tour.description}</p>
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
export default Tour;
