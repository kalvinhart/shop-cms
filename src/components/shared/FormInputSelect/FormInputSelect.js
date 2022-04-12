import { useController } from "react-hook-form";
import { MenuItem, TextField } from "@mui/material";

const FormInputSelect = ({ name, control, label, options, rules = {}, error }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: options[0].value,
    rules,
  });

  const selectOptions = options.map((item) => (
    <MenuItem key={item.value} value={item.value}>
      {item.label}
    </MenuItem>
  ));

  return (
    <TextField select label={label} {...(error ? { error: true } : {})} {...field}>
      {selectOptions}
    </TextField>
  );
};

export default FormInputSelect;
