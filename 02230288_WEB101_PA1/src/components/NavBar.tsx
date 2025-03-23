import { FileText, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-semibold">Google Docs Clone</h1>
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder=""
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      </div>

      {/* User Profile Icon */}
      <User className="w-8 h-8 text-gray-600 cursor-pointer" />
    </header>
  );
}
