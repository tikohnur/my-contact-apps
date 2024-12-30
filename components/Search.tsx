import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
        placeholder="search..."
      />
      <IoSearch size={20} className="absolute left-3 top-2 h-5 w5 text-gray-500" />
    </div>
  );
}
