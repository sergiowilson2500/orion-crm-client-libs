import { LoadTypeKey } from "../types";

export const LazyLoadBroker: Record<LoadTypeKey, LoadTypeKey> = {
  Financial: "Financial",
  MarketSummary: "MarketSummary"
}
