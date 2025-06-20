import { StockQoute, StockQouteFullName } from "./types";

const apiKey = process.env.finnhubApiKey;

const baseUrl = "https://finnhub.io/api/v1";

const getDatafromFinnhub = async (
  symbol: string = "AAPL"
): Promise<StockQoute> => {
  console.log("Symbol: ", symbol);
  console.log("api: ", apiKey);
  const endpoint = `${baseUrl}/quote?symbol=${symbol}&token=${apiKey}`;
  const response = await fetch(endpoint);
  const data: StockQoute = await response.json();
  return data;
};

const mapToFullName = (data: StockQoute): StockQouteFullName => {
  return {
    currentPrice: data.c,
    change: data.d,
    percentChange: data.dp,
    highPriceOfTheDay: data.h,
    lowPriceOfTheDay: data.l,
    OpenPriceOfTheDay: data.o,
    previousClosePrice: data.pc,
    timestamp: data.t,
  };
};

const fetchStockData = async () => {
  try {
    const response: StockQoute = await getDatafromFinnhub("AMZN");
    const formattedData = mapToFullName(response);
    console.log("response: ", formattedData);
  } catch (error) {
    console.error("error while fetching: ", error);
  }
};

fetchStockData();
