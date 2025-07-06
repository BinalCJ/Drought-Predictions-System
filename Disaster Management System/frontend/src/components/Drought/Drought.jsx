import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero_bg3 from "../../assets/njkndjkcnw.png";

const DroughtForm = () => {
  const [region, setRegion] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [spi, setSpi] = useState("");
  const [spei, setSpei] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!region || !rainfall || !spi || !spei) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Region: region,
          "Rainfall Deficit": parseFloat(rainfall),
          SPI: parseFloat(spi),
          SPEI: parseFloat(spei),
        }),
      });

      const result = await response.json();

      if (result["Monthly Drought Forecast"]) {
        navigate("/drought-result", {
          state: {
            forecast: result["Monthly Drought Forecast"],
            region: result["Region"],
          },
        });
      } else {
        throw new Error("Invalid prediction response");
      }
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Prediction failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative min-h-screen bg-gray-100 pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${hero_bg3}')` }}
        />
        <div className="relative mx-auto max-w-lg bg-white/75 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#c9974b] mb-6 text-center">
            Drought Prediction System
          </h2>

          <label className="block mb-2">Region:</label>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Enter Region"
          />

          <label className="block mb-2">Rainfall Deficit (mm):</label>
          <input
            type="number"
            className="w-full p-2 mb-4 border rounded"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            placeholder="Enter Rainfall Deficit"
          />

          <label className="block mb-2">Precipitation index (%):</label>
          <input
            type="number"
            className="w-full p-2 mb-4 border rounded"
            value={spi}
            onChange={(e) => setSpi(e.target.value)}
            placeholder="Enter Precipitation Index"
          />

          <label className="block mb-2">Evapotranspiration index (%):</label>
          <input
            type="number"
            className="w-full p-2 mb-4 border rounded"
            value={spei}
            onChange={(e) => setSpei(e.target.value)}
            placeholder="Enter Evapotranspiration Index"
          />

          <button
            type="submit"
            className="w-full bg-[#c9974b] text-white py-2 px-4 rounded hover:bg-[#d4b27f] transition"
          >
            Predict Drought Risk
          </button>
        </div>
      </div>
    </form>
  );
};

export default DroughtForm;
