import { BoardWhereInput } from "./BoardWhereInput";

export type BoardListRelationFilter = {
  every?: BoardWhereInput;
  some?: BoardWhereInput;
  none?: BoardWhereInput;
};
