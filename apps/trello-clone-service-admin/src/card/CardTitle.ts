import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "title";

export const CardTitle = (record: TCard): string => {
  return record.title?.toString() || String(record.id);
};
