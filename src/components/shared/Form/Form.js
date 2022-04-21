import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

const Form = ({ component, submit }) => {
  const Component = component;

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const submitFormAndClearInput = (data) => {
    submit(data);
    reset();
  };

  return (
    <Box
      component="form"
      encType="multipart/form-data"
      onSubmit={handleSubmit(submitFormAndClearInput)}
      sx={{
        width: "100%",
      }}
    >
      <Component control={control} errors={errors} />
    </Box>
  );
};

export default Form;
