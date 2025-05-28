export default function ReportModal({ onClose }) {
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

        {/* Modal content */}
        <h2 className="text-xl font-semibold mb-4">Report Wallet</h2>

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
              className="block w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
              className="block w-full rounded-md border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          onClick={onClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
