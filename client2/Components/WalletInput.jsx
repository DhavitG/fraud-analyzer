export default function WalletInput() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter wallet address"
          className="px-4 py-2 border border-gray-300 rounded w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-black text-white rounded shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer">
          Scan
        </button>

        <button className="px-4 py-2 bg-blue-600 text-white rounded shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer">
          Report
        </button>
      </div>
    </div>
  );
}
