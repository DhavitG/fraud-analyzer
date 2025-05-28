export default function RiskLevelBar({ level }) {
  const getBarProps = (level) => {
    switch (level.toLowerCase()) {
      case "low":
        return { width: "33%", color: "bg-green-500", label: "Low Risk" };
      case "medium":
        return { width: "67%", color: "bg-yellow-500", label: "Medium Risk" };
      case "high":
        return { width: "100%", color: "bg-red-500", label: "High Risk" };
      default:
        return { width: "0%", color: "bg-gray-300", label: "Unknown" };
    }
  };

  const { width, color, label } = getBarProps(level);

  return (
    <div className="mt-6 w-96">
      <div className="mb-1 text-sm text-gray-700">{label}</div>
      <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-500`}
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}
