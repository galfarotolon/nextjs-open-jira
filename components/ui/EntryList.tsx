import { Paper, List } from "@mui/material";
import React, { FC, useContext, useMemo, DragEvent } from "react";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui/UIContext";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent) => {
    const id = event.dataTransfer.getData("text");
    //there will always be an ID - this is why ! at the end
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    //todo: aqui haremos drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          // overflow: "scroll",
          backgroundColor: "transparent",
          padding: "5px",
        }}
      >
        {/* todo: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all 0.3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
