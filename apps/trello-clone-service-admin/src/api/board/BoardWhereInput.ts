import { CardListRelationFilter } from "../card/CardListRelationFilter";
import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BoardWhereInput = {
  cards?: CardListRelationFilter;
  columns?: ColumnListRelationFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
