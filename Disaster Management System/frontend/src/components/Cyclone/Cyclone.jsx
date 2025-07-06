import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero_bg4 from "../../assets/360_F_811083804_VrFX37PmpUvFZUcH011Mzq3RtT1gj1mQ.jpg";

const CycloneForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    "Atmospheric Pressure (hPa)": "",
    "Sea Surface Temperature (°C)": "",
    "Humidity (%)": "",
    "Ocean Heat Content (kJ/cm²)": "",
    "Vertical Wind Shear (m/s)": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) {
      alert("❗ Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/cyclone-predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Server error");
      }

      const result = await response.json();

      navigate("/cyclone-result", {
        state: {
          forecast: result["Monthly Cyclone Forecast"],
          region: result["Region"],
        },
      });
    } catch (error) {
      console.error("❌ Prediction error:", error.message);
      alert("Failed to get prediction: " + error.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-84"
        style={{ backgroundImage: `url('${hero_bg4}')` }}
      />
      <div className="relative mx-auto max-w-lg bg-white/65 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#042757] mb-6 text-center">
          Cyclone Prediction System
        </h2>

        {Object.entries(formData).map(([label, value]) => (
          <div key={label} className="mb-4">
            <label className="block text-gray-700 mb-2">{label}</label>
            <input
              type="number"
              step="any"
              name={label}
              className="w-full p-2 border border-gray-300 rounded"
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${label}`}
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-[#042757] text-white py-2 px-4 rounded hover:bg-[#0b4699] transition"
        >
          Predict Cyclone Risk
        </button>
      </div>
    </div>
  );
};

export default CycloneForm;
