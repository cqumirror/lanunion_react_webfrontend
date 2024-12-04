import React from "react";
import { FormQuestionProps, RepairFormData } from "./FormQuestions";
import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";

export default function FormQuestionFaultDescriptionHardware({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, campus: parseInt(event.target.value) } });
  };

  const [canOpen, setCanOpen] = React.useState<number | string>(0);
  const [isLaptop, setIsLaptop] = React.useState<number | string>(0);

  const handleCanOpenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanOpen((event.target as HTMLInputElement).value);
  };

  const handleIsLaptopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLaptop((event.target as HTMLInputElement).value);
  };
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexDirection: "column", }}>

      <Box sx={{ display: "flex", gap: 20, alignItems: "center" }}>
        <FormControl component="fieldset">
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            您电脑现在是否能正常开机
          </Typography>
          <RadioGroup
            row
            aria-labelledby="canOpen"
            name="canOpen"
            value={canOpen}
            onChange={handleCanOpenChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="是" />
            <FormControlLabel value={1} control={<Radio />} label="否" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
            您设备是否为笔记本
          </Typography>
          <RadioGroup
            row
            aria-labelledby="islaptop"
            name="islaptop"
            value={isLaptop}
            onChange={handleIsLaptopChange}
          >
            <FormControlLabel value={0} control={<Radio />} label="是" />
            <FormControlLabel value={1} control={<Radio />} label="否" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <TextField id="outlined-basic" label="品牌" variant="outlined" />
        <TextField id="outlined-basic" label="型号" variant="outlined" />
        <TextField id="outlined-basic" label="购买时间" variant="outlined" />
      </Box>
      <TextField multiline
        rows={4} fullWidth id="outlined-basic" label="详细描述" variant="outlined" />
    </Box>
  )
}