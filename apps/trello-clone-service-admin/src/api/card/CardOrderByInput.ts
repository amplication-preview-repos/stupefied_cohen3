import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  boardId?: SortOrder;
  columnId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
