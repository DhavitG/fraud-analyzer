import { Shield } from "lucide-react";

export default function Header() {
  return (
    <div className="relative w-full bg-gradient-to-r from-amber-50 to-stone-100 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="p-2 rounded-lg bg-white shadow-sm border border-stone-200">
            <Shield className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-light text-stone-800 tracking-wide">
              Fraud Analyzer
            </h1>
            <p className="text-sm text-stone-500 mt-1">
              Blockchain Security Intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
