import { useState } from "react";
import hero_bg1 from "../../assets/joidjcoi.png";

const FloodForm = () => {
  const [rainfall, setRainfall] = useState("");
  const [riverLevel, setRiverLevel] = useState("");
  const predictRisk = () => {};

  return (
    <div className="relative min-h-screen bg-gray-100 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('${hero_bg1}')` }}
      />
      <div className="relative mx-auto max-w-lg bg-white/85 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#348039] mb-6 text-center">
          Flood Prediction System
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rainfall (mm):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            placeholder="Enter rainfall"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">River Level (m):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={riverLevel}
            onChange={(e) => setRiverLevel(e.target.value)}
            placeholder="Enter river level"
          />
        </div>
        <button
          onClick={predictRisk}
        className="w-full bg-[#348039] text-white py-2 px-4 rounded hover:bg-[#53c25b] transition"
        >
          Predict Flood Risk
        </button>
        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
        </div>
        {/* {result && (
          // <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
          //   <p>Flood Risk: <strong>{result.risk}%</strong></p>
          //   <p>Risk Level: <strong>{result.level}</strong></p>
          // </div>
        )} */}
      </div>
    </div>
  );
};

export default FloodForm;