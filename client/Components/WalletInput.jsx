import { useState } from "react";
import ReportModal from "./ReportModal";
import RiskInfo from "./RiskInfo";
import RiskLevelBar from "./RiskLevelBar";
import riskData from "../data/risk_data.json";

export default function WalletInput() {
  const [showModal, setShowModal] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [scannedAddress, setScannedAddress] = useState(null);
  const [reportError, setReportError] = useState("");
  const [noDataError, setNoDataError] = useState("");

  const closeModal = () => {
    setShowModal(false);
    setReportError("");
  };

  const handleReportClick = () => {
    if (!walletAddress.trim()) {
      setReportError("Please enter a wallet address before reporting.");
      setTimeout(() => setReportError(""), 3000);
      return;
    }

    setReportError("");
    setShowModal(true);
  };

  const handleScanClick = () => {
    const trimmedAddress = walletAddress.trim();
    setScannedAddress(trimmedAddress);
    setShowScan(true);
    setNoDataError("");

    if (!riskData[trimmedAddress]) {
      setNoDataError("No data found for this wallet.");
      setTimeout(() => setNoDataError(""), 3000);
    }
  };

  const riskLevel = scannedAddress
    ? riskData[scannedAddress]?.risk_level || null
    : null;

  return (
    <div className="flex flex-col items-center justify-start pt-75">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter wallet address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-black text-white rounded shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer"
          onClick={handleScanClick}
        >
          Scan
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-black focus:ring-offset-2 cursor-pointer"
          onClick={handleReportClick}
        >
          Report
        </button>
      </div>

      {reportError && (
        <div className="mt-2">
          <p className="text-red-600 text-sm">{reportError}</p>
        </div>
      )}

      <div className="mt-6 flex flex-col items-center w-full">
        {showScan && (
          <>
            {riskLevel ? (
              <>
                <RiskLevelBar level={riskLevel} />
                <RiskInfo walletAddress={scannedAddress} />
              </>
            ) : (
              noDataError && <p className="text-red-600">{noDataError}</p>
            )}
          </>
        )}
      </div>

      {showModal && (
        <ReportModal
          onClose={closeModal}
          prefilledWallet={walletAddress.trim()}
        />
      )}
    </div>
  );
}
