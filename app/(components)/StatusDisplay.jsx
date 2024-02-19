import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) {
    let color = "bg-slate-700"
    switch (status.toLowerCase()) {
      case "not started":
        color = "bg-red-200"
        break;
      case "in progress":
        color = "bg-blue-600"
        break;
      case "completed":
        color = "bg-green-600"
        break;
      default:
        color = "bg-slate-700"
        break;
    }
  }
  return (
    <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200">
      {status}
    </span>
  );
};

export default StatusDisplay;
