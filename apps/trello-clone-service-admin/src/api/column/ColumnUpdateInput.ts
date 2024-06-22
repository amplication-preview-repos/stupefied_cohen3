import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { CardUpdateManyWithoutColumnsInput } from "./CardUpdateManyWithoutColumnsInput";

export type ColumnUpdateInput = {
  board?: BoardWhereUniqueInput | null;
  cards?: CardUpdateManyWithoutColumnsInput;
  name?: string | null;
};
