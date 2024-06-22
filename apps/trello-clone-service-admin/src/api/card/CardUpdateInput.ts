import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type CardUpdateInput = {
  board?: BoardWhereUniqueInput | null;
  column?: ColumnWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
