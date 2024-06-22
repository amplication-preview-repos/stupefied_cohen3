import { BoardWhereInput } from "./BoardWhereInput";
import { BoardOrderByInput } from "./BoardOrderByInput";

export type BoardFindManyArgs = {
  where?: BoardWhereInput;
  orderBy?: Array<BoardOrderByInput>;
  skip?: number;
  take?: number;
};
