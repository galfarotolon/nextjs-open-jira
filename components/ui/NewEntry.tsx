import { Button, Box, TextField } from "@mui/material";
import React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant="outlined"
      >
        Agregar nueva tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="Nueva Entrada"
        autoFocus
        multiline
        label="Nueva Entrada"
        helperText="Ingresa un nuevo task"
      />
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Guardar
        </Button>
        <Button variant="text">Cancelar</Button>
      </Box>
    </Box>
  );
};
