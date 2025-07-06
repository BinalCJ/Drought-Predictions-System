import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import backgroundImage from "../../assets/njkndjkcnw.png";
import { Bold } from "lucide-react";

const getColor = (riskLevel) => {
  const risk = typeof riskLevel === "string" ? riskLevel.toLowerCase() : "";
  switch (risk) {
    case "moderate risk":
      return "#7ed957";
    case "severe risk":
      return "#ffde59";
    case "low risk":
      return "#81d1ff";
    case "high risk":
      return "#ff3131";
    default:
      return "#ccc";
  }
};

const DroughtResult = () => {
  const location = useLocation();
  const data = location.state;

  if (!data || !data.forecast || !data.region) {
    return (
      <div style={{ padding: "20px", fontSize: "18px" }}>
        <Navbar />
        <p>No data found. Please submit the form again.</p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", minHeight: "125vh" }}>
      {/* ✅ Background image as <img> with lower opacity */}
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
          opacity: 0.6, // 👈 Controls how faint the background image is
          zIndex: 0,
        }}
      />

      {/* ✅ Main content stays fully visible */}
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
            color: "#4a3e31",
            fontFamily: "revert-layer",
            fontSize: 40,
            fontWeight: Bold,
          }}
        >
          {data.region} (Anuradhapura District - අනුරාධපුර දිස්ත්‍රික්කය)
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

export default DroughtResult;
