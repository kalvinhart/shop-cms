import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import FormInputText from "../../shared/FormInputText/FormInputText";
import { useSelector } from "react-redux";

const CategoryForm = ({ control, errors }) => {
  const { posting } = useSelector((state) => state.category);

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

        <Button
          disabled={posting}
          type="submit"
          variant="contained"
          {...(posting ? {} : { startIcon: <SaveIcon /> })}
        >
          {posting ? <CircularProgress size={25} /> : "Save"}
        </Button>
      </Box>
    </>
  );
};

export default CategoryForm;
