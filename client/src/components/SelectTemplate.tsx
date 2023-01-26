import { Grid } from "@mui/material";
import { templates } from "../templates";
import Template2 from "../templates/Template2";
import TemplateCustom from "../templates/TemplateCustom";

const SelectTemplate = () => {
  return (
    <>
      {/* <Template2 />  */}
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
