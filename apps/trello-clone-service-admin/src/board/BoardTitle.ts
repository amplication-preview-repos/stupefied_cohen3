import { Board as TBoard } from "../api/board/Board";

export const BOARD_TITLE_FIELD = "name";

export const BoardTitle = (record: TBoard): string => {
  return record.name?.toString() || String(record.id);
};
