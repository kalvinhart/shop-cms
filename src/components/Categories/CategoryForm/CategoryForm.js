import { Box, Button, FormControl, FormHelperText, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import FormInputText from "../../shared/FormInputText/FormInputText";

const CategoryForm = ({ control, errors }) => {
  return (
    <>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          "& > *:not(:last-child)": {
            marginBottom: "10px",
          },
          "& .MuiFormHelperText-root": {
            color: "#d32f2f",
          },
        }}
      >
        <FormControl>
          <FormInputText
            {...(errors.name ? { error: true } : {})}
            name="name"
            control={control}
            label="Name"
            rules={{ required: true }}
          />
          <FormHelperText>{errors.name ? "This field is required" : " "}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </>
  );
};

export default CategoryForm;
