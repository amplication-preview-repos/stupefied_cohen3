import { Board } from "../board/Board";
import { Card } from "../card/Card";

export type Column = {
  board?: Board | null;
  cards?: Array<Card>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
