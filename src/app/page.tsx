"use client";
import { StockQouteFullName } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<StockQouteFullName | null>(null);

  return (
    <>
      <h1>Hello on dashboard</h1>
      <h1>Good Morning...</h1>
      
      <div>

    { data ? data.OpenPriceOfTheDay : "no data yet..."


    }
        
      </div>


    </>
  );
}
