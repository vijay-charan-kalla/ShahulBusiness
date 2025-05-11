import React from "react";
import mugPrinting from '../assets/Customized-Photo-Printed-Coffee-Mug.jpg';
import photoPrinting from '../assets/20230717_162517753148_eba8f6_Personalized-Photo-Frames.jpg';
import pvcPrinting from '../assets/adharcard.png'
const Frames = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <h3 style={{ color: "white" }}>Frame Craft Studio</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{ width: "200px", height: "200px" }}
        >
          <h4>Photo Frames</h4>
          <div style={{ width: "100%" }}>
        <img
          src={photoPrinting}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div>
        </div>
        <div
          style={{  width: "200px", height: "200px" }}
        >
          <h4>Mug Printing</h4>
          <div style={{ width: "100%" }}>
        <img
          src={mugPrinting}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div>
        </div>
        <div
          style={{width: "200px", height: "200px" }}
        >
          <h4>PVC Card Printing</h4>
          <div style={{ width: "100%" }}>
        <img
          src={pvcPrinting}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div>
        </div>
      </div>
      {/* <div style={{ width: "100%" }}>
        <img
          src={waterPlantSummary}
          style={{ width: "100%",height:"100%", background: "cover" }}
          alt="whyUsImage"
        />
      </div> */}
    </div>
  );
};

export default Frames;
