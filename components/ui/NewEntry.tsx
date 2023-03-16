import { Button, Box, TextField } from "@mui/material";
import React, { ChangeEvent, useState, useContext } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState("");
  const [touched, setIsTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);

    setIsAddingEntry(false);
    setInputValue("");
    setIsTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={
              inputValue.length === 0 && touched && "Ingresa un nuevo task"
            }
            error={inputValue.length === 0 && touched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setIsTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar nueva tarea
        </Button>
      )}
    </Box>
  );
};
