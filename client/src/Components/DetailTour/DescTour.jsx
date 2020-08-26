import React from "react";
import { useQuery } from "react-query";
import ReactHtmlParser from "react-html-parser";

const DescTour = ({ detailTrip }) => {
  return (
    <div>
      <div className="desc">{ReactHtmlParser(detailTrip.description)}</div>
    </div>
  );
};

export default DescTour;
