import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FormQuestionProps } from "../interfaces";

export default function FaultDescriptionHardware({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {

  const handleOsChange = (event: SelectChangeEvent) => {
    const selectedOs = parseInt(event.target.value);
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, os: selectedOs } });
  }

  const handleOsBitNumberChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, osBitNumber: parseInt(event.target.value) } });
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, brandSoftware: event.target.value } });
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, modelSoftware: event.target.value } });
  };

  const handleTimeBroughtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, timeBroughtSoftware: event.target.value } });
  };

  const handleDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, detailSoftware: event.target.value } });
  };

  const styles = {
    OuterBox: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "80%",
    },
    BrandBox: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },
  };

  return (
    <Box sx={styles.OuterBox}>
      <Box sx={styles.BrandBox}>
        <FormControl fullWidth>
          <InputLabel>操作系统</InputLabel>
          <Select
            label="操作系统"
            value={String(repairFormData.faultDescription?.os)}
            onChange={handleOsChange}
          >
            <MenuItem value={0}>Windows</MenuItem>
            <MenuItem value={1}>MacOS</MenuItem>
            <MenuItem value={2}>Linux</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>系统位数</InputLabel>
          <Select
            label="系统位数"
            value={String(repairFormData.faultDescription?.osBitNumber)}
            onChange={handleOsBitNumberChange}
          >
            <MenuItem value={0}>32位</MenuItem>
            <MenuItem value={1}>64位</MenuItem>
            <MenuItem value={2}>不清楚</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={styles.BrandBox}>
        <TextField fullWidth label="设备品牌" variant="outlined" value={repairFormData.faultDescription?.brandSoftware} onChange={handleBrandChange} />
        <TextField fullWidth label="设备型号" variant="outlined" value={repairFormData.faultDescription?.modelSoftware} onChange={handleModelChange} />
        <TextField fullWidth label="购买时间" variant="outlined" value={repairFormData.faultDescription?.timeBroughtSoftware} onChange={handleTimeBroughtChange} />
      </Box>
      <TextField multiline rows={4} fullWidth label="详细描述" variant="outlined" helperText="请尽量描述故障信息" value={repairFormData.faultDescription?.detailSoftware} onChange={handleDetailChange} />
    </Box>
  );
}
