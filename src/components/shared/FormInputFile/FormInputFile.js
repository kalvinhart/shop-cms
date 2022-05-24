import { Button, InputLabel, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useController } from "react-hook-form";

const FormInputFile = ({ name, control, rules = {}, accept }) => {
  const [fileName, setFileName] = useState(null);
  const { field } = useController({
    name,
    control,
    defaultValue: "",
    rules,
  });

  const handleLabelUpdate = (files) => {
    if (files.length === 0) {
      setFileName(null);
    } else {
      setFileName(files[0].name);
    }
  };

  return (
    <>
      <InputLabel sx={{ alignSelf: "flex-end" }} htmlFor={name}>
        <Input
          id={name}
          name={name}
          type="file"
          inputProps={{ accept }}
          onChange={(e) => {
            field.onChange(e.target.files);
            handleLabelUpdate(e.target.files);
          }}
          style={{ display: "none" }}
        />
        <Button type="button" variant="contained" component="span">
          Choose File
        </Button>
        <Typography component="span" ml={2}>
          {fileName}
        </Typography>
      </InputLabel>
    </>
  );
};

export default FormInputFile;
