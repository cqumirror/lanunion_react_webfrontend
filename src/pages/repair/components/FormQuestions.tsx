import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Container,
  TextField
} from "@mui/material";
import React from "react";

interface QuestionProps {
  required?: boolean;
  title: string;
  options?: string[];
  value?: string;
  handleChange: (
    prop: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function setItem(name: string, value: string): void {
  const old = sessionStorage.getItem("repairInfo") || "{}";
  sessionStorage.setItem(
    "repairInfo",
    JSON.stringify({
      ...JSON.parse(old),
      [name]: value
    })
  );
}

export function Question({
  required,
  title,
  options,
  value,
  handleChange
}: QuestionProps): JSX.Element {

  return (
    <Container style={{ margin: 10 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        {options ? (
          <RadioGroup value={value} onChange={handleChange(title)}>
            {options.map(option => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        ) : (
          <TextField
            key={title}
            required={required}
            // value={value}
            onChange={(e): void => setItem(title, e.target.value)}
          />
        )}
      </FormControl>
    </Container>
  );
}
