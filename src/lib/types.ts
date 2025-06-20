export interface StockQoute {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
  t: number; // timestamp
}

export interface StockQouteFullName {
  currentPrice: number;
  change: number;
  percentChange: number;
  highPriceOfTheDay: number;
  lowPriceOfTheDay: number;
  OpenPriceOfTheDay: number;
  previousClosePrice: number;
  timestamp: number;
}
