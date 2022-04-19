import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInputText = ({
  type = "text",
  name,
  control,
  rules = {},
  label,
  error,
  ...rest
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
    rules,
  });

  return (
    <TextField
      type={type}
      label={label}
      {...(error ? { error: true } : {})}
      {...field}
      {...rest}
    />
  );
};

export default FormInputText;
