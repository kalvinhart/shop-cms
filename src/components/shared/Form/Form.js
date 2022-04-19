import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

const Form = ({ component, submit }) => {
  const Component = component;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Box
      component="form"
      encType="multipart/form-data"
      onSubmit={handleSubmit(submit)}
      sx={{
        width: "100%",
      }}
    >
      <Component control={control} errors={errors} />
    </Box>
  );
};

export default Form;
