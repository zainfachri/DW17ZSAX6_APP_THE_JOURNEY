import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import ProfileImg from "../../img/profle/img1.png";
import "./Profile.css";

const Profile = () => {
  const [userData, setUser] = useState([]);
  const [showButton, setButton] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);

  const [updateUser, setUpdate] = useState({
    imgUser: "",
  });

  const user = localStorage.getItem("userId");

  const editUser = async () => {
    let fd = new FormData();
    fd.append("imgUser", updateUser.imgUser);
    try {
      const result = await axios.patch(
        `http://localhost:5001/api/v1/user/${user}`,
        fd
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setUpdate({
      ...updateUser,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
    setButton(true);
  };

  const onChangeFileImage = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      setPreviewSrc([reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const getUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/user/${user}`
      );
      const resData = result.data.data;
      setUser(resData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profileBg">
      <div className="profile">
        <div className="profile-img">
          <form updateUser={updateUser} enctype="multipart/form-data">
            <div className="profilePic">
              {!userData.userImg && !previewSrc ? (
                <img
                  src={ProfileImg}
                  alt="Profile"
                  width="300px"
                  height="345px"
                />
              ) : previewSrc ? (
                <img
                  src={previewSrc}
                  alt="Profile"
                  width="300px"
                  height="345px"
                />
              ) : (
                <img
                  src={`http://localhost:5001/uploads/${userData.userImg}`}
                  alt="Profile"
                  width="300px"
                  height="345px"
                />
              )}
              <h3
                style={{ textAlign: "center", marginTop: 10, marginBottom: 0 }}
              >
                {userData.fullName}
              </h3>
              <p style={{ textAlign: "center" }}>{userData.email}</p>
            </div>
            {/* <div class="custom-file">
              <input
                name="imgUser"
                type="file"
                onChange={(event) => {
                  handleChange(event);
                  onChangeFileImage(event);
                }}
              />
            </div>
            {showButton && (
              <button
                className="btn btn-warning"
                style={{ color: "#fff", width: "100%" }}
                onClick={editUser}
              >
                Save
              </button>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
