import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { CardCreateNestedManyWithoutColumnsInput } from "./CardCreateNestedManyWithoutColumnsInput";

export type ColumnCreateInput = {
  board?: BoardWhereUniqueInput | null;
  cards?: CardCreateNestedManyWithoutColumnsInput;
  name?: string | null;
};
