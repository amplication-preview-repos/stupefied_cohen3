import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CardWhereInput = {
  board?: BoardWhereUniqueInput;
  column?: ColumnWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
