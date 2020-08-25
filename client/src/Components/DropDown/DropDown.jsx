import React from "react";
import { Link } from "react-router-dom";

import "./DropDown.css";

const DropDown = ({ showDropDown, logOut }) => {
  const res = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="triangle-up"></div>
      <div className="drop-down">
        <div className="drop-out-top">
          <div className="drop-inside-top">
            <div className="drop-top">
              {res.roleId == 1 ? (
                <>
                  <Link to="/income-trip">
                    <div className="drop-list" onClick={() => showDropDown()}>
                      <i
                        class="fa fa-globe"
                        aria-hidden="true"
                        style={{ color: "#2FC5F7" }}
                      ></i>
                      <span>Trip</span>
                    </div>
                  </Link>
                  <Link to="/income-transaction">
                    <div className="drop-list" onClick={() => showDropDown()}>
                      <i
                        class="fa fa-list"
                        aria-hidden="true"
                        style={{ color: "#9C27B0" }}
                      ></i>
                      <span>Income</span>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile">
                    <div className="drop-list" onClick={() => showDropDown()}>
                      <i
                        class="fa fa-user-o"
                        aria-hidden="true"
                        style={{ color: "#FFAF00" }}
                      ></i>
                      <span>Profile</span>
                    </div>
                  </Link>
                  <Link to="/payment-pending">
                    <div className="drop-list" onClick={() => showDropDown()}>
                      <i
                        class="fa fa-paper-plane-o"
                        aria-hidden="true"
                        style={{ color: "#87A900" }}
                      ></i>
                      <span>New Journey</span>
                    </div>
                  </Link>
                  <Link to="/bookmark">
                    <div className="drop-list" onClick={() => showDropDown()}>
                      <i
                        class="fa fa-bookmark-o"
                        aria-hidden="true"
                        style={{ color: "#3B97D3" }}
                      ></i>
                      <span>Bookmark</span>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="drop-out-bottom">
          <div className="drop-inside-bottom">
            <div className="drop-list">
              <i
                class="fa fa-sign-out"
                aria-hidden="true"
                style={{ color: "#E50914" }}
              ></i>
              <span onClick={() => logOut()}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
