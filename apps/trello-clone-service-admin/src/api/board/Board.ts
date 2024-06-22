import { Card } from "../card/Card";
import { Column } from "../column/Column";

export type Board = {
  cards?: Array<Card>;
  columns?: Array<Column>;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
