import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ColumnWhereInput = {
  board?: BoardWhereUniqueInput;
  cards?: CardListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
