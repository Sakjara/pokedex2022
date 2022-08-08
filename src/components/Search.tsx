import React, { useEffect } from "react";

interface ISearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
}

const Search: React.FunctionComponent<ISearchProps> = ({
  setSearch,
  setShowSearch,
  search,
}) => {
  useEffect(() => {
    if (search.length < 1) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [search.length, setShowSearch]);

  return (
    <input
      type="text"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      className="w-60 h-7 border-2 border-slate-300 rounded-xl mt-12 mb-10  px-9 py-6 focus:outline-none focus:border-[#FF4343FF] focus:ring-[#FF4343FF]"
      placeholder="Que Pokemón Buscas?" id="buscador"
    />
  );
};

export default Search;
