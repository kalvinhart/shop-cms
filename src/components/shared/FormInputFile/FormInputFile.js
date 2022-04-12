import { Button, InputLabel, Input } from "@mui/material";
import { useController } from "react-hook-form";

const FormInputFile = ({ name, control, rules = {}, accept }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
    rules,
  });

  return (
    <>
      <InputLabel htmlFor={name}>
        <Input
          id={name}
          type="file"
          inputProps={{ accept }}
          {...field}
          style={{ display: "none" }}
        />
        <Button type="button" variant="contained" component="span">
          Choose File
        </Button>
      </InputLabel>
    </>
  );
};

export default FormInputFile;
