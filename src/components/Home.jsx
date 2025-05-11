import React from "react";
import watchSummary from "../assets/watchSummary.png";
import watchrepair from "../assets/watchrepair.jpg";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%" }}>
        <img
          src={watchSummary}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div>
      <div style={{ width: "50%" }}>
        <img
          src={watchrepair}
          style={{ width: "100%", background: "cover",height:"100%" }}
          alt="whyUsImage"
        />
      </div>
    </div>
  );
};

export default Home;
