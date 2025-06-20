import Fuse from "fuse.js";
import { useEffect, useState } from "react";

const data = [
  {
    title: "Old Man's War",
    author: "John Scalzi",
    tags: ["fiction"],
  },
  {
    title: "The Lock Artist",
    author: "Steve",
    tags: ["thriller"],
  },
];

const options = {
  includeScore: false,
  keys: ["title", "author"],
};

const fuse = new Fuse(data, options);

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<object>({});

  useEffect(() => {
    const result = fuse.search(query);
    setSearchResult(result);
  }, [query]);

  return (
    <>
      <input
        className="border border-gray-200 rounded-sm px-3 py-2 m-3 w-44
        hover:border-gray-700 hover:shadow-sm hover:shadow-stone-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-sky-500 focus:w-64
        transition-all duration-300 ease-in-out font-funnel
        "
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>data</p>
      <div>
        {Array.isArray(searchResult) &&
          searchResult.map((result, index) => (
            <div key={index}>
              <p>
                {result.item.title} | {result.item.author}
              </p>{" "}
            </div>
          ))}
      </div>
    </>
  );
}
