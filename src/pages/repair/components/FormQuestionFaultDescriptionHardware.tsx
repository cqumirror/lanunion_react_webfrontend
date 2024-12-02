import React from "react";
import { RepairFormData } from "./FormQuestions";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

export interface FormQuestionsfaultCategoryProps {
  repairFormData: RepairFormData;
  setRepairFormData: (repairFormData: RepairFormData) => void;
}
export default function FormQuestionFaultDescriptionHardware({ repairFormData, setRepairFormData, }: FormQuestionsfaultCategoryProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, campus: parseInt(event.target.value) } });
  };
  return (
    
    <Box sx={{ display: "flex", gap: 2, alignItems: "center"}}>
      <FormControl fullWidth>
        <InputLabel id="canOpen">能开机</InputLabel>
        <Select
          labelId="canOpen"
          id="demo-simple-1"
          // value={String(repairFormData.contactInfo?.campus)}
          label="Campus"
          onChange={handleChange}
        >
          <MenuItem value={0}>是</MenuItem>
          <MenuItem value={1}>否</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="islaptop">笔记本</InputLabel>
        <Select
          labelId="islaptop"
          id="demo-simple-2"
          // value={String(repairFormData.contactInfo?.campus)}
          label="Campus"
          onChange={handleChange}
        >
          <MenuItem value={0}>是</MenuItem>
          <MenuItem value={1}>否</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth id="outlined-basic" label="品牌" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="型号" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="购买时间" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="详细描述" variant="outlined" />
    </Box>
  )
}