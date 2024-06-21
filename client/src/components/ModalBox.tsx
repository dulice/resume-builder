import { SyntheticEvent } from "react";
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
import { Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

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
    console.log(values);
  };

  const handleAddField = () => {
    setFormValues([
      ...formValues,
      {
        id: formValues[formValues.length - 1].id + 1,
        label: "New field",
        value: "",
        icon: <VscDebugBreakpointFunction />,
      },
    ]);
  };

  const handleDeleteField = (index: number) => {
    setFormValues(formValues.filter((value) => value.id !== index));
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
          <FontSize fontSize={fontSize} setFontSize={setFontSize} />
          <TransitionGroup>
            {formValues.map((info, index) => (
              <Collapse key={info.id}>
                <Stack spacing={1} direction="row" sx={{ my: 1 }}>
                  {info.label === "Description" ? (
                    <Textarea
                      required
                      minRows={6}
                      sx={{ width: "100%" }}
                      value={info.value}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    />
                  ) : (
                    <TextField
                      required
                      fullWidth
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
                  {formValues.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteField(info.id)}
                    >
                      <HiX />
                    </IconButton>
                  )}
                </Stack>
              </Collapse>
            ))}
          </TransitionGroup>
          <Stack spacing={1} direction="row">
            <Button variant="outlined" onClick={handleAddField}>
              Add
            </Button>
            <Button variant="outlined" color="error" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalBox;
