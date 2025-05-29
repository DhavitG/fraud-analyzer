import { Home, Search, AlertCircle, Settings, Shield } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-amber-50 to-stone-100 border-r border-stone-200 shadow-sm flex flex-col px-6 py-8">
      {/* Logo / Brand at top */}
      <div className="mb-10 flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-white shadow-sm border border-stone-200">
          {/* You can reuse the Shield icon or add your logo here */}
          <Shield className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-semibold text-stone-800 tracking-wide">
          Fraud Analyzer
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 text-stone-700">
        <button
          type="button"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow cursor-pointer transition"
        >
          <Home className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium text-stone-800">Dashboard</span>
        </button>

        <button
          type="button"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow cursor-pointer transition"
        >
          <Search className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium text-stone-800">Scan Wallet</span>
        </button>

        <button
          type="button"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow cursor-pointer transition"
        >
          <AlertCircle className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium text-stone-800">Reports</span>
        </button>

        <button
          type="button"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white hover:shadow cursor-pointer transition mt-auto"
        >
          <Settings className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-medium text-stone-800">Settings</span>
        </button>
      </nav>
    </aside>
  );
}
