import { useSelector } from "react-redux";

import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import FormInputText from "../../shared/FormInputText/FormInputText";
import FormInputSelect from "../../shared/FormInputSelect/FormInputSelect";
import FormInputFile from "../../shared/FormInputFile/FormInputFile";

const ProductForm = ({ control, errors }) => {
  const { categories } = useSelector((state) => state.category);
  const { posting } = useSelector((state) => state.product);

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "880px",
          marginRight: "80px",
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

        <FormControl>
          <FormInputText
            {...(errors.brand ? { error: true } : {})}
            name="brand"
            control={control}
            label="Brand"
            rules={{ required: true }}
          />
          <FormHelperText>{errors.brand ? "This field is required" : " "}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormInputText name="size" control={control} label="Size" />
          <FormHelperText> </FormHelperText>
        </FormControl>

        <FormControl>
          <FormInputText name="color" control={control} label="Colour" />
          <FormHelperText> </FormHelperText>
        </FormControl>

        <FormControl>
          <FormInputSelect
            name="categories"
            label="Category"
            {...(errors.categories ? { error: true } : {})}
            control={control}
            {...(categories ? { options: categories } : {})}
            rules={{ required: true }}
          />
          <FormHelperText>
            {errors.categories ? "This field is required" : " "}
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormInputText
            {...(errors.price ? { error: true } : {})}
            type="number"
            name="price"
            control={control}
            label="Price"
            rules={{ required: true }}
          />
          <FormHelperText>{errors.price ? "This field is required" : " "}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormInputText
            type="number"
            name="stockQty"
            control={control}
            label="Quantity"
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          disabled={posting}
          {...(posting ? {} : { startIcon: <SaveIcon /> })}
        >
          {posting ? <CircularProgress size={25} /> : "Save"}
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h4" mb={4}>
          Upload an Image
        </Typography>

        <FormInputFile name="image" control={control} accept="image/*" />

        <FormInputText
          type="text"
          name="desc"
          control={control}
          label="Description"
          multiline
          minRows={10}
          maxRows={20}
          fullwidth
          sx={{ marginTop: "20px", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default ProductForm;
