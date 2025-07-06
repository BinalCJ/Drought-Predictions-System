import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import backgroundImage from "../../assets/360_F_811083804_VrFX37PmpUvFZUcH011Mzq3RtT1gj1mQ.jpg";
import { Bold } from "lucide-react";

const getColor = (riskLevel) => {
  const risk = typeof riskLevel === "string" ? riskLevel.toLowerCase() : "";
  switch (risk) {
    case "moderate":
      return "#7ed957";
    case "severe":
      return "#ffde59";
    case "low":
      return "#81d1ff";
    case "high":
      return "#ff3131";
    default:
      return "#ccc";
  }
};


const CycloneResult = () => {
  const location = useLocation();
  const data = location.state;
  console.log("CycloneResult data:", data);

  if (!data || !data.forecast || !data.region) {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
      
        <p>No data found. Please submit the form again.</p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", minHeight: "125vh" }}>
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          padding: "40px",
          color: "#000",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#08174d",
            fontFamily: "revert-layer",
            fontSize: 40,
            fontWeight: Bold,
          }}
        >
          {data.region} (Batticaloa District - මඩකලපුව දිස්ත්‍රික්කය: 7.7249° N, 81.6967° E)
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginTop: "40px",
            padding: "0 10%",
          }}
        >
          {Object.entries(
            data.forecast.reduce((acc, item) => ({ ...acc, ...item }), {})
          ).map(([month, risk], index) => (
            <div
              key={index}
              style={{
                backgroundColor: getColor(risk),
                borderRadius: "25px",
                padding: "20px",
                color: "#000",
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ margin: 0 }}>
                {month} : {risk}
                <br />
                {data.region}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CycloneResult;
