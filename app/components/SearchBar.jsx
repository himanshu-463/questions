"use client";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="search"
      placeholder="Search PYQ (eg: ecc sem 3)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 rounded-full text-white bg-gray-800"
    />
  );
};

export default SearchBar;
