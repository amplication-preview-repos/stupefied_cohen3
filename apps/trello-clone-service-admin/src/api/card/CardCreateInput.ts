import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type CardCreateInput = {
  board?: BoardWhereUniqueInput | null;
  column?: ColumnWhereUniqueInput | null;
  description?: string | null;
  title?: string | null;
};
