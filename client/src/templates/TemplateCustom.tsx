import {
  Card,
  CardContent,
  Divider,
  Box,
  IconButton,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import { SyntheticEvent, useRef, useState } from "react";
import Draggable from "react-draggable";
import { HiCheck, HiX } from "react-icons/hi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import SideInfo from "../components/SideInfo";
import { contactInfo } from "../data/contact";
import { education } from "../data/education";
import { skills } from "../data/skill";
import { about } from "../data/about";
import { experience } from "../data/experience";
import { title } from "../data/title";
import { useReactToPrint } from "react-to-print";

const TemplateCustom = () => {
  const componentRef = useRef(null);
  const [save, setSave] = useState<boolean>(false);
  const [disableDraggable, setDisableDraggable] = useState<boolean>(false);

  const [image, setImage] = useState<string | null>(null);

  const handelChangeImage = (e: SyntheticEvent) => {
    const file = (e.target as HTMLFormElement).files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Card variant="outlined" sx={{ m: 3 }}>
        <CardContent>
          <Box ref={componentRef} sx={{ p: 3 }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <SideInfo title="" data={title} save={save} />
              </Grid>
              <Grid item>
                <Draggable>
                  <div>
                    <div className={`${!disableDraggable && "border"}`}>
                      <label htmlFor="image">
                        {image ? (
                          <img src={image} alt="" className="profile-img" />
                        ) : (
                          <MdOutlineAddAPhoto size={100} />
                        )}
                      </label>
                      <input
                        hidden={true}
                        type="file"
                        name="image"
                        id="image"
                        onChange={handelChangeImage}
                      />
                    </div>
                    {!disableDraggable && (
                      <>
                        {/* <IconButton onMouseMove={handleExpand}>
                    <HiOutlineArrowsExpand />
                </IconButton> */}
                        <IconButton onClick={() => setDisableDraggable(true)}>
                          <HiCheck />
                        </IconButton>
                        <IconButton>
                          <HiX />
                        </IconButton>
                      </>
                    )}
                  </div>
                </Draggable>
              </Grid>
            </Grid>

            <Divider />
            <Box>
              <Grid container sx={{ p: 1 }}>
                <Grid item xs={4}>
                  <Stack>
                    <SideInfo save={save} title="Contact" data={contactInfo} />
                    <SideInfo save={save} title="Education" data={education} />
                    <SideInfo save={save} title="Skill" data={skills} />
                  </Stack>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />
                <Grid item xs={7}>
                  <Stack>
                    <SideInfo save={save} title="Profile" data={about} />
                    <SideInfo
                      save={save}
                      title="Working Experience"
                      data={experience}
                    />
                    <SideInfo save={save} title="" data={experience} />
                    <SideInfo save={save} title="" data={experience} />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Stack spacing={3} direction="row-reverse">
            <Button
              variant="contained"
              color="success"
              onClick={handleDownload}
            >
              Download
            </Button>
            <Button variant="contained" onClick={() => setSave(true)}>
              Save
            </Button>
            <Button variant="outlined" onClick={() => setSave(false)}>
              Edit
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateCustom;
