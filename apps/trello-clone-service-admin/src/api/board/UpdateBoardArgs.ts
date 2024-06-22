import { BoardWhereUniqueInput } from "./BoardWhereUniqueInput";
import { BoardUpdateInput } from "./BoardUpdateInput";

export type UpdateBoardArgs = {
  where: BoardWhereUniqueInput;
  data: BoardUpdateInput;
};
