import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInputText = ({ type = "text", name, control, rules = {}, label, error }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
    rules,
  });

  return (
    <TextField type={type} label={label} {...(error ? { error: true } : {})} {...field} />
  );
};

export default FormInputText;
