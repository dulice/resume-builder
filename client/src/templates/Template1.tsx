import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Template1 = () => {
  const handleDownload = () => window.print();
  return (
    <Card variant="outlined">
      <Button onClick={handleDownload}>DownLoad</Button>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <h1 contentEditable="true" style={{ padding: 0, margin: 0 }}>
              Name
            </h1>
            <Typography variant="body1" color="GrayText">
              job title
            </Typography>
          </Box>
          <Box>
            <Avatar
              src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
              alt=""
              sx={{ width: 100, height: 100 }}
            />
          </Box>
        </Box>
        <Divider sx={{ my: 3, borderColor: "gray" }} />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <h3>Contact</h3>
            <div>
              <Typography variant="body2" color="gray">
                phone
              </Typography>
              <Typography variant="body2" color="gray">
                address
              </Typography>
              <Typography variant="body2" color="gray">
                mail
              </Typography>
              <Typography variant="body2" color="gray">
                link
              </Typography>
            </div>
            <Divider sx={{ my: 3, borderColor: "gray" }} />
            <div>
              <h3>Education</h3>
              <div>
                <Typography sx={{ fontWeight: "bold" }}>Major</Typography>
                <Typography variant="body2" color="gray">
                  university
                </Typography>
                <Typography variant="body2" color="gray">
                  <i>year</i>
                </Typography>
              </div>
            </div>
            <Divider sx={{ my: 3, borderColor: "gray" }} />
            <div>
              <h3>Skills</h3>
              <div>
                <Typography variant="body2" color="gray">
                  phone
                </Typography>
                <Typography variant="body2" color="gray">
                  address
                </Typography>
                <Typography variant="body2" color="gray">
                  mail
                </Typography>
                <Typography variant="body2" color="gray">
                  link
                </Typography>
              </div>
            </div>
          </Grid>
          {/* <Grid item xs={1}> */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ ml: 5, mr: 3, borderColor: "gray" }}
          />
          {/* </Grid> */}
          <Grid item xs={8}>
            <div>
              <h3 contentEditable="true">Profile</h3>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </div>
            <Divider sx={{ my: 3, borderColor: "gray" }} />
            <div>
              <h3>Working Experience</h3>
              <div>
                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: "bold" }}>
                        job title
                      </Typography>
                      <Typography variant="body2" color="gray">
                        <i>company name | year</i>
                      </Typography>
                      <Typography variant="body2">
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: "bold" }}>
                        job title
                      </Typography>
                      <Typography variant="body2" color="gray">
                        <i>company name | year</i>
                      </Typography>
                      <Typography variant="body2">
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Template1;
