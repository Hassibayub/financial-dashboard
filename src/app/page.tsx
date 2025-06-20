"use client";
import SearchBar from "@/components/layout/searchbar";
import { fetchStockData } from "@/lib/finnhub";
import { StockQouteFullName } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<StockQouteFullName | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: StockQouteFullName | undefined = await fetchStockData();

      if (data) {
        setData(data);
      } else {
        console.log("got error, here is the error data: ", data);
        setData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Hello on dashboard</h1>
      <h1>Good Morning...</h1>

      <div>{data ? data.percentChange : "no data yet..."}</div>

      <SearchBar />
    </>
  );
}
