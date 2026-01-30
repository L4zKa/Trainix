import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
} from "@fluentui/react-components";
import type { WorkoutSession } from "../../storage";
import { columns } from "./HistoryEntrysColumns";

export const HistoryEntrys = ({
  AllSessions,
  openSession,
}: {
  AllSessions: WorkoutSession[];
  openSession: (sessionId: string) => void;
}) => {
  return (
    <DataGrid items={AllSessions} columns={columns} sortable>
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<WorkoutSession>>
        {({ item, rowId }) => (
          <DataGridRow<WorkoutSession>
            key={rowId}
            onClick={() => openSession(item.id)}
          >
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
