import React from "react";
import waterPlantSummary from '../assets/MANJEERA_page-0002.jpg';

const WaterPlant = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <h3 style={{ color: "#0041C2" }}>MANJEERA RO Plant</h3>
      </div>
      <div style={{ width: "100%", height:"100%", marginBottom:"-10px" }}>
        <img
          src={waterPlantSummary}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div>
    </div>
  );
};

export default WaterPlant;
