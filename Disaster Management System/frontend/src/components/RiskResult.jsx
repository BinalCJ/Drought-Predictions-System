const RiskResult = ({ risk, level }) => {
  const getBgColor = () => {
    switch (level) {
      case "Low":
        return "bg-green-500";
      case "Moderate":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      case "Extreme":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`mt-4 p-3 rounded-md text-white text-center font-bold ${getBgColor()}`}
    >
      {level} Risk ({risk}%)
    </div>
  );
};

export default RiskResult;
