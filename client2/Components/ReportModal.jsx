import { useEffect, useState } from "react";

export default function ReportModal({ onClose, prefilledWallet }) {
  const [reporter, setReporter] = useState("");
  const [wallet, setWallet] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (prefilledWallet) {
      setWallet(prefilledWallet);
    }
  }, [prefilledWallet]);

  const isValidEmail = (reporter) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reporter);
  const isValidWallet = (wallet) => /^0x[a-fA-F0-9]{40}$/.test(wallet);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    if (!reporter || !wallet || !reason) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(reporter)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isValidWallet(wallet)) {
      setError(
        "You cannot report this wallet. Please enter a valid wallet address."
      );
      return;
    }

    if (!reason.trim()) {
      setError("Please provide a reason.");
      return;
    }

    // Preparing data to send
    const payload = {
      reporter,
      wallet,
      reason,
    };

    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Failed to submit report");
        return;
      }

      setSuccess("Report submitted successfully");

      setReporter("");
      setWallet("");
      setReason("");

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (e) {
      setError(e.message || "Something went wrong");
      setSuccess(null);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/20 backdrop-blur-md"
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Report Wallet</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={reporter}
                onChange={(e) => setReporter(e.target.value)}
                className="block w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="wallet"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Wallet Address
              </label>
              <input
                type="text"
                id="wallet"
                placeholder="0x1234abcd..."
                value={wallet}
                readOnly={!!prefilledWallet}
                onChange={
                  !prefilledWallet
                    ? (e) => setWallet(e.target.value)
                    : undefined
                }
                className={`block w-full rounded-md border p-2 text-gray-900 placeholder-gray-400 ${
                  prefilledWallet
                    ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                    : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Reason
              </label>
              <textarea
                id="reason"
                rows="3"
                placeholder="Explain why you want to report this wallet..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="block w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          {/* Success message */}
          {success && (
            <p className="text-green-600 text-sm font-medium">{success}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
