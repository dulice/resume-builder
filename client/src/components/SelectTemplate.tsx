import { Grid, Typography } from "@mui/material";
import { templates } from "../templates";
import TemplateCustom from "../templates/TemplateCustom";
import { blue } from "@mui/material/colors";

const SelectTemplate = () => {
  return (
    <>
      <Typography variant="h5" sx={{my: 1, fontWeight: "bold", color: blue[700]}}>Resume Builder</Typography>
      <TemplateCustom />
      {/* <Grid container>
        {templates.map((template) => (
          <Grid item key={template.id} xs={6} md={3}>
            <template.component />
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default SelectTemplate;
