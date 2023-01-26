import React, { SyntheticEvent, useState } from "react";
import {
  Modal,
  Box,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { HiX } from "react-icons/hi";
import FontSize from "./FontSize";
import { FormValue } from "../templates/Inputs";
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { Textarea } from "@mui/joy";

const style = {
  position: "absolute",
  top: "10%",
  left: "10%",
  overflow: "scroll",
  height: "90%",
};
interface ModalBoxProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  fontSize: string;
  setFontSize: (value: string) => void;
  formValues: FormValue[];
  setFormValues: (value: FormValue[]) => void;
  setShowValue: (value: boolean) => void;
  setDisableDraggable: (value: boolean) => void;
}
const ModalBox = (props: ModalBoxProps) => {
  const {
    open,
    setOpen,
    fontSize,
    setFontSize,
    formValues,
    setFormValues,
    setShowValue,
    setDisableDraggable,
  } = props;

  const handleChange = (e: any, index: number) => {
    setShowValue(false);
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = () => {
    setFormValues([
      ...formValues,
      {
        id: formValues.length + 1,
        label: "New field",
        value: "",
        icon: <VscDebugBreakpointFunction />,
      },
    ]);
  };

  const handleDeleteField = (index: number) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowValue(true);
    setOpen(false);
    setDisableDraggable(false);
  };

  return (
    <Modal
      sx={style}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="model">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FontSize fontSize={fontSize} setFontSize={setFontSize} />
            {formValues.map((info, index) => (
              <Stack spacing={1} direction="row">
                {info.label === "Description" ? (
                  <Textarea
                    minRows={6}
                    sx={{ width: "100%" }}
                    key={index}
                    value={info.value}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                ) : (
                  <TextField
                    fullWidth
                    key={index}
                    value={info.value}
                    onChange={(e) => handleChange(e, index)}
                    placeholder={info.label}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {info.icon}
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                )}
                <IconButton
                  color="error"
                  onClick={() => handleDeleteField(index)}
                >
                  <HiX />
                </IconButton>
              </Stack>
            ))}
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={handleAddField}>
                Add
              </Button>
              <Button variant="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalBox;
