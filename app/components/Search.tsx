"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (!searchVal) {
      router.push(`/photos`);
    } else {
      router.push(`/photos?search=${searchVal}`);
    }
  }, [searchVal, router]);

  return (
    <div className="flex">
      <div className="form-control">
        <input
          type="text"
          value={searchVal}
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
