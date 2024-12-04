import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import { FormQuestionProps } from "./FormQuestions";

export default function FormQuestionFaultCategory({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, campus: parseInt(event.target.value) } });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <FormControl fullWidth sx={{ maxWidth: "100pt" }}>
          <InputLabel id="demo-simple-select-label">校区</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={String(repairFormData.contactInfo?.campus)}
            label="Campus"
            onChange={handleChange}
          >
            <MenuItem value={0}>A区</MenuItem>
            <MenuItem value={1}>B区</MenuItem>
            <MenuItem value={2}>C区</MenuItem>
            <MenuItem value={3}>虎溪校区</MenuItem>
          </Select>
        </FormControl>
        <TextField fullWidth label="详细地址" variant="outlined" />
      </Box>
      <TextField multiline rows={2} fullWidth label="额外信息" variant="outlined" />
    </Box>
  );
};
