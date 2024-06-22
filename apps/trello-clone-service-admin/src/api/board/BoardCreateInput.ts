import { CardCreateNestedManyWithoutBoardsInput } from "./CardCreateNestedManyWithoutBoardsInput";
import { ColumnCreateNestedManyWithoutBoardsInput } from "./ColumnCreateNestedManyWithoutBoardsInput";

export type BoardCreateInput = {
  cards?: CardCreateNestedManyWithoutBoardsInput;
  columns?: ColumnCreateNestedManyWithoutBoardsInput;
  createdBy?: string | null;
  name?: string | null;
};
