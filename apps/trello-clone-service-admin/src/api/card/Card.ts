import { Board } from "../board/Board";
import { Column } from "../column/Column";

export type Card = {
  board?: Board | null;
  column?: Column | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
