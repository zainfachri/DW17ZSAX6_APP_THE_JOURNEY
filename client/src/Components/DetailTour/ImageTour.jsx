import React from "react";
// import incomeData from "../../DataTour/incomeData";

const ImageTour = ({ detailTrip }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12 mb-3 banner">
          <img
            src={`http://localhost:5001/uploads/${detailTrip.jnImg}`}
            height="550px"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTour;
