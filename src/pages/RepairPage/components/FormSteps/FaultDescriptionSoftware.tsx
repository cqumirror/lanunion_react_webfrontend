import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FormQuestionProps } from "../RepairForm";

export default function FaultDescriptionHardware({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {
  const [osVersionOptions, setOsVersionOptions] = useState([
    { value: 0, label: "Win 11" },
    { value: 1, label: "Win 10" },
    { value: 2, label: "Win 8" },
    { value: 3, label: "Win 7" },
    { value: 4, label: "Win XP" },
    { value: 5, label: "其他/不清楚" }
  ]);

  const handleOsChange = (event: SelectChangeEvent) => {
    const selectedOs = parseInt(event.target.value);
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, os: selectedOs, osVersion: undefined } });

    // 动态更新 OSVersion 的选项
    const newOptions =
      selectedOs === 1
        ? [
          { value: 0, label: "Ventura" },
          { value: 1, label: "Monterey" },
          { value: 2, label: "Big Sur" },
          { value: 3, label: "Catalina" },
          { value: 4, label: "其他/不清楚" }
        ]
        : selectedOs === 2
          ? [
            { value: 0, label: "Ubuntu" },
            { value: 1, label: "Debian" },
            { value: 2, label: "Fedora" },
            { value: 3, label: "Arch Linux" },
            { value: 4, label: "其他/不清楚" }
          ]
          : [
            { value: 0, label: "Win 11" },
            { value: 1, label: "Win 10" },
            { value: 2, label: "Win 8" },
            { value: 3, label: "Win 7" },
            { value: 4, label: "Win XP" },
            { value: 5, label: "其他/不清楚" }
          ];
    setOsVersionOptions(newOptions);
  };

  const handleOsVersionChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, osVersion: parseInt(event.target.value) } });
  };

  const handleOsBitNumberChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, osBitNumber: parseInt(event.target.value) } });
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, brand: event.target.value } });
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, model: event.target.value } });
  };

  const handleTimeBroughtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, timeBrought: event.target.value } });
  };

  const handleDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, detail: event.target.value } });
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
          <InputLabel>系统版本</InputLabel>
          <Select
            label="系统版本"
            value={String(repairFormData.faultDescription?.osVersion)}
            onChange={handleOsVersionChange}
          >
            {osVersionOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
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
        <TextField fullWidth label="设备品牌" variant="outlined" value={repairFormData.faultDescription?.brand} onChange={handleBrandChange} />
        <TextField fullWidth label="设备型号" variant="outlined" value={repairFormData.faultDescription?.model} onChange={handleModelChange} />
        <TextField fullWidth label="购买时间" variant="outlined" value={repairFormData.faultDescription?.timeBrought} onChange={handleTimeBroughtChange} />
      </Box>
      <TextField multiline rows={4} fullWidth label="详细描述" variant="outlined" helperText="请尽量描述故障信息" value={repairFormData.faultDescription?.detail} onChange={handleDetailChange} />
    </Box>
  );
}
