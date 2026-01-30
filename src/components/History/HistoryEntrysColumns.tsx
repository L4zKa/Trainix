import {
  createTableColumn,
  TableCellLayout,
  type TableColumnDefinition,
} from "@fluentui/react-components";
import type { WorkoutSession } from "../../storage";

export const columns: TableColumnDefinition<WorkoutSession>[] = [
  createTableColumn<WorkoutSession>({
    columnId: "templateName",
    compare: (a, b) => {
      return a.templateName.localeCompare(b.templateName);
    },
    renderHeaderCell: () => {
      return "Name";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.templateName}</TableCellLayout>;
    },
  }),

  createTableColumn<WorkoutSession>({
    columnId: "started",
    compare: (a, b) => {
      return new Date(a.startedAt) > new Date(b.startedAt) ? 0 : 1;
    },
    renderHeaderCell: () => {
      return "Gestartet";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {new Date(item.startedAt).toLocaleString()}
        </TableCellLayout>
      );
    },
  }),

  createTableColumn<WorkoutSession>({
    columnId: "templateExercises",
    compare: (a, b) => {
      return Number(a.exercises.length) - Number(b.exercises.length);
    },
    renderHeaderCell: () => {
      return "Anzahl Übungen";
    },
    renderCell: (item) => {
      return <TableCellLayout>{item.exercises.length}</TableCellLayout>;
    },
  }),
];
