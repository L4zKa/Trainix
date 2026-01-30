import {
  Dialog,
  DialogBody,
  DialogSurface,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Text,
  Subtitle2,
} from "@fluentui/react-components";
import type { WorkoutSession } from "../../storage";

export const ShowSessionDialog = ({
  session,
  closeDialog,
}: {
  session: WorkoutSession | undefined;
  closeDialog: () => void;
}) => {
  return (
    <Dialog open={session != undefined}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{session?.templateName}</DialogTitle>
          <DialogContent
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {session?.exercises.map((exercise) => (
              <>
                <Subtitle2>{exercise.name}</Subtitle2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {exercise.sets.map((x, i) => (
                    <Text>
                      {i + 1 + ". " + x.reps + " x " + x.weightKg + "kg"}
                    </Text>
                  ))}
                  {exercise.sets.length == 0 && <Text>Nicht gemacht</Text>}
                </div>
              </>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Schließen</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
