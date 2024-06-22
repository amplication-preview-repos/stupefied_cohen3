import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOARD_TITLE_FIELD } from "../board/BoardTitle";
import { COLUMN_TITLE_FIELD } from "./ColumnTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="board" source="board.id" reference="Board">
          <TextField source={BOARD_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Card" target="columnId" label="Cards">
          <Datagrid rowClick="show">
            <ReferenceField label="board" source="board.id" reference="Board">
              <TextField source={BOARD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="column"
              source="column.id"
              reference="Column"
            >
              <TextField source={COLUMN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
