import riskData from "../data/risk_data.json";

export default function RiskInfo({ walletAddress }) {
  const incidentData = riskData[walletAddress]?.incidents || [];

  if (!incidentData.length) {
    return <p className="text-green-600 mt-4">No past history</p>;
  }

  return (
    <div className="mt-8 w-full max-w-4xl px-6">
      <h2 className="text-lg font-semibold mb-2">Incident History</h2>
      <table className="min-w-full border text-sm bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2 border">Reported Date</th>
            <th className="text-left p-2 border">Summary</th>
            <th className="text-left p-2 border">Source</th>
          </tr>
        </thead>
        <tbody>
          {incidentData.map((incident, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-2 border">{incident.date}</td>
              <td className="p-2 border">{incident.summary}</td>
              <td className="p-2 border">Backend</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
