import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  boardId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
