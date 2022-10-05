import { useForm as useFormHook } from "../../../hooks/useForm/useForm";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";

const Form = ({ component, submit, defaultValues = null }) => {
  const Component = component;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ defaultValues });

  const resetter = useFormHook(defaultValues, reset, isSubmitSuccessful);

  return (
    <Box
      component="form"
      encType="multipart/form-data"
      onSubmit={handleSubmit(submit)}
      sx={{
        width: "100%",
      }}
    >
      <Component control={control} errors={errors} image={defaultValues?.image} />
    </Box>
  );
};

export default Form;
