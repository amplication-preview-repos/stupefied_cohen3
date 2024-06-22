import { CardUpdateManyWithoutBoardsInput } from "./CardUpdateManyWithoutBoardsInput";
import { ColumnUpdateManyWithoutBoardsInput } from "./ColumnUpdateManyWithoutBoardsInput";

export type BoardUpdateInput = {
  cards?: CardUpdateManyWithoutBoardsInput;
  columns?: ColumnUpdateManyWithoutBoardsInput;
  createdBy?: string | null;
  name?: string | null;
};
