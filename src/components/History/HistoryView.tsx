import { Text } from "@fluentui/react-components";
import { useStyles } from "../../helpers/globalFunctions";
import type { WorkoutSession } from "../../storage";
import { HistoryEntrys } from "./HistoryEntrys";
import { useState } from "react";
import { ShowSessionDialog } from "./ShowSessionDialog";

export function HistoryView(props: {
  sessions: WorkoutSession[];
  setActiveSessionId(id: string): void;
}) {
  const styles = useStyles();
  const sessions = props.sessions;

  const [selectedSessionObj, setSelectedSessionObj] =
    useState<WorkoutSession>();

  return (
    <div className={styles.box}>
      <ShowSessionDialog
        session={selectedSessionObj}
        closeDialog={() => setSelectedSessionObj(undefined)}
      />
      {sessions.length === 0 ? (
        <Text className={styles.tiny}>No sessions yet.</Text>
      ) : (
        <HistoryEntrys
          AllSessions={sessions}
          openSession={(sessionId: string) => {
            const selectedSessionObject = sessions.find(
              (x) => x.id == sessionId,
            );
            setSelectedSessionObj(selectedSessionObject);
          }}
        />
      )}
    </div>
  );
}
