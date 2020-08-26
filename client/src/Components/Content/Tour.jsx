import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";

import Loading from "../Loading/Loading";
import "./Content.css";

const Tour = ({ setModalLogin }) => {
  let history = useHistory();
  const user = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [bookmark, setBm] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);
  const [trip, setTrip] = useState([]);
  const [saveJn, setJn] = useState({
    bmUserId: user,
    journeyId: "",
  });

  useEffect(() => {
    setFilteredName(
      trip.filter((tour) =>
        tour.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, trip]);

  const fetchTourData = async () => {
    const result = await axios.get("http://localhost:5001/api/v1/journey");
    const resData = result.data.data;
    setTrip(resData);
  };
  const { isLoading } = useQuery("trip", fetchTourData);

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
    getBookmarkData();
  }, []);

  const getBookmarkData = async () => {
    const result = await axios.get(
      `http://localhost:5001/api/v1/bookmark/user/${user}`
    );
    const resData = result.data.data;
    setBm(resData);
  };

  const setBookmark = (id) => {
    trip.filter((tour) => tour.id == id);
    setJn({
      ...saveJn,
      journeyId: id,
    });
    storeBookmark();
  };
  return (
    <div>
      <div class="input-group mb-3 home-search">
        <input
          type="text"
          class="form-control"
          placeholder="Find Journey"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="tourList">
          {filteredName.map((tour) => (
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
                      {tour.title.substring(0, 50)}...
                    </h5>
                    <Moment
                      format="D MMMM YYYY"
                      withTitle
                      style={{ color: "#BFBFBF", fontSize: 14 }}
                    >
                      {tour.createdAt}
                    </Moment>
                  </div>
                  <p className="desc-text">
                    {ReactHtmlParser(tour.description.substring(0, 100))}...{" "}
                    <span
                      className="readmore"
                      style={{ color: "#2e86de", fontWeight: 600 }}
                      onClick={() => {
                        history.push(`/detail/${tour.id}`);
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
export default Tour;
