import { useController } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";

const FormInputSelect = ({
  name,
  control,
  label,
  options = [{ name: "Loading..." }],
  rules = {},
  error,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: options[0].name,
    rules,
  });

  const selectOptions = options.map((item) => (
    <MenuItem key={item.name} value={item.name}>
      {item.name}
    </MenuItem>
  ));

  return (
    <TextField select label={label} {...(error ? { error: true } : {})} {...field}>
      {selectOptions}
    </TextField>
  );
};

export default FormInputSelect;
