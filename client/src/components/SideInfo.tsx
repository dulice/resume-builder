import React, { useState } from "react";
import Draggable from "react-draggable";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";
import { HiX, HiCheck } from "react-icons/hi";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FormValue } from "../templates/Inputs";
import ModalBox from "./ModalBox";
import { motion } from "framer-motion";

interface SideInfoProps {
  title: string;
  data: FormValue[];
  save: boolean;
}

const cardVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      ease: "easeIn",
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .5,
      ease: "easeOut",
    }
  }
}

const SideInfo = ( prop : SideInfoProps) => {
  const { title, data, save } = prop
  const [formValues, setFormValues] = useState<FormValue[]>(data);
  const [open, setOpen] = useState<boolean>(false);
  const [showValue, setShowValue] = useState<boolean>(false);
  const [disableDraggable, setDisableDraggable] = useState<boolean>(true);
  const [display, setDisplay] = useState<string>("block");
  const [fontSize, setFontSize] = useState<string>("11");
  const [deleteBio, setDeleteBio] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this section")) {
        setDeleteBio(true);
      setTimeout(() => {
        setDisplay("none")
      }, 300);
    }
  };

  return (
    <div style={{ display }}>
      <ModalBox
        fontSize={fontSize}
        setFontSize={setFontSize}
        open={open}
        setOpen={setOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        setDisableDraggable={setDisableDraggable}
        setShowValue={setShowValue}
      />
      <motion.div variants={cardVariant} initial="hidden" animate={deleteBio ? "exit" : "visible"}>
        <Draggable disabled={disableDraggable}>
          <Box>
            <Box sx={{ width: "max-content" }}>
              <div className={disableDraggable || save ? "" : "border"}>
                <Box sx={{ m: 1 }}>
                  <h3>
                    <span>{title}</span>
                    {!save && (
                      <>
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => setOpen(true)}
                        >
                          <FiEdit />
                        </IconButton>
                        <IconButton
                          color="error"
                          size="small"
                          onClick={handleDelete}
                        >
                          <FiTrash />
                        </IconButton>
                      </>
                    )}
                  </h3>
                  <List>
                    {formValues.map((info) => (
                      <ListItem key={info.id} sx={{ fontSize, color: "gray" }}>
                        {info.label?.includes("Title") ? (
                          <h4>{showValue ? info.value : info.label} </h4>
                        ) : info.label === "Your Name" ? (
                          <h2>{showValue ? info.value : info.label} </h2>
                        ) : (
                          <>
                            {info.icon && (
                              <ListItemIcon sx={{ minWidth: 20 }}>
                                {info.icon}
                              </ListItemIcon>
                            )}
                            <span>{showValue ? info.value : info.label}</span>
                          </>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </div>
              {!disableDraggable && !save && (
                <Stack spacing={1} direction="row">
                  <IconButton
                    onClick={() => setDisableDraggable(true)}
                    color="primary"
                  >
                    <HiCheck />
                  </IconButton>
                  <IconButton onClick={handleDelete} color="error">
                    <HiX />
                  </IconButton>
                </Stack>
              )}
            </Box>
            {formValues[0].label !== "Your Name" && <Divider sx={{ m: 2 }} />}
          </Box>
        </Draggable>
      </motion.div>
    </div>
  );
};

export default SideInfo;
