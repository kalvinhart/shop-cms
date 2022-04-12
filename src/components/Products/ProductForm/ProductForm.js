import { useForm } from "react-hook-form";

import { Box, Button, FormControl, FormHelperText, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import FormInputText from "../../shared/FormInputText/FormInputText";
import FormInputSelect from "../../shared/FormInputSelect/FormInputSelect";
import FormInputFile from "../../shared/FormInputFile/FormInputFile";

const ProductForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
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
            options={[
              { value: 1, label: "Item 1" },
              { value: 2, label: "Item 2" },
            ]}
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
          <FormHelperText> </FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" startIcon={<SaveIcon />}>
          Save
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
      </Box>
    </Box>
  );
};

export default ProductForm;
