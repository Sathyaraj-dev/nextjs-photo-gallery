"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");
  const [debouncedValue] = useDebounce(searchVal, 300);

  const handleSearch = (event: any) => {
    setSearchVal(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let searchText = event.target.search.value;
    router.push(`/photos?search=${searchText}`);
    // setSearchVal("");
  };

  useEffect(() => {
    if (!searchVal) {
      router.push(`/`);
      setSearchVal("");
    }
  }, [searchVal, router]);

  return (
    <div className="flex">
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchVal}
          name="search"
          placeholder="Search Photos..."
          className="sm:flex items-center w-72 text-left drop-shadow space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
