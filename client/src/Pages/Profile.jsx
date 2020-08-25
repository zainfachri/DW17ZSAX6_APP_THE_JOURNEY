import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

import ProfileDesc from "../Components/Profile/ProfileDesc";
import "./NotFound.css";

const Profile = () => {
  const [userData, setUser] = useState([]);
  let history = useHistory();
  const user = localStorage.getItem("userId");

  const getTransaction = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/journey/user/${user}`
      );
      const resData = result.data.data;
      setUser(resData);
    } catch (err) {
      console.log(err);
    }
  };
  const { isLoading } = useQuery("transaction", getTransaction);

  return (
    <div>
      <ProfileDesc userData={userData} />
      <div className="container"></div>
      <div className="tourList">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {userData.map((story) => (
              <div className="list-tour">
                <div
                  className="tour"
                  key={story.id}
                  onClick={() => {
                    history.push(`/detail/${story.id}`);
                  }}
                >
                  <div className="picture">
                    <img
                      src={`http://localhost:5001/uploads/${story.jnImg}`}
                      height="241px"
                    />
                    <p>
                      <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    </p>
                  </div>
                  <div className="info-journey">
                    <div className="info-head">
                      <h5
                        style={{ marginBottom: 0, fontWeight: 700 }}
                        onClick={() => {
                          history.push(`/detail/${story.id}`);
                        }}
                      >
                        {story.title}
                      </h5>
                      <Moment
                        format="D MMMM YYYY"
                        withTitle
                        style={{ color: "#BFBFBF", fontSize: 14 }}
                      >
                        {story.createdAt}
                      </Moment>
                    </div>
                    <p className="desc-text">{story.description}</p>
                  </div>
                </div>
                {/* </Link> */}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
