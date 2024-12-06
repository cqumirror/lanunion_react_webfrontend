import React, { useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { FormQuestionProps } from "../RepairForm";

export default function FaultDescriptionHardware({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {
  const [showWarning, setShowWarning] = useState(false);

  const handleCanBootUpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, canBootUp: parseInt(event.target.value) === 0 ? true : false } });
  };

  const handleIsNotebookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, isNoteBook: parseInt(event.target.value) === 0 ? true : false } });
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, brand: event.target.value } });
    checkWarning(event.target.value, repairFormData.faultDescription?.model || "");
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, model: event.target.value } });
    checkWarning(repairFormData.faultDescription?.brand || "", event.target.value);
  };

  const handleTimeBroughtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, timeBrought: event.target.value } });
  };

  const handleDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, detail: event.target.value } });
  };

  const checkWarning = (brand: string, model: string) => {
    const warningKeywords = ["Apple", "苹果", "Mac", "apple", "mac"];
    const isApple =
      warningKeywords.some((keyword) => brand.includes(keyword)) ||
      warningKeywords.some((keyword) => model.includes(keyword));
    setShowWarning(isApple);
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, isApple: isApple } });
  };

  const styles = {
    OuterBox: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "80%",
    },
    RadioGroupOuterBox: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
    },
    RadioGroupBox: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    BrandBox: {
      display: "flex",
      flexDirection: "row",
      gap: 2,
    },
  };

  return (
    <Box sx={styles.OuterBox}>
      <Box sx={styles.RadioGroupOuterBox}>
        <Box sx={styles.RadioGroupBox}>
          <Typography sx={{ minWidth: "240px" }}>
            您设备目前是否能够正常启动
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup row value={repairFormData.faultDescription?.canBootUp} onChange={handleCanBootUpChange}>
              <FormControlLabel value={0} control={<Radio />} label="是" />
              <FormControlLabel value={1} control={<Radio />} label="否" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={styles.RadioGroupBox}>
          <Typography sx={{ minWidth: "240px" }}>
            您设备是否为笔记本电脑
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup row value={repairFormData.faultDescription?.isNoteBook} onChange={handleIsNotebookChange}>
              <FormControlLabel value={0} control={<Radio />} label="是" />
              <FormControlLabel value={1} control={<Radio />} label="否" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box sx={styles.BrandBox}>
        <TextField fullWidth label="品牌" variant="outlined" value={repairFormData.faultDescription?.brand} onChange={handleBrandChange} />
        <TextField fullWidth label="型号" variant="outlined" value={repairFormData.faultDescription?.model} onChange={handleModelChange} />
        <TextField fullWidth label="购买时间" variant="outlined" value={repairFormData.faultDescription?.timeBrought} onChange={handleTimeBroughtChange} />
      </Box>
      <TextField multiline rows={4} fullWidth label="详细描述" variant="outlined" helperText="请尽量描述故障信息" value={repairFormData.faultDescription?.detail} onChange={handleDetailChange} />
      {showWarning && (
        <Typography color="error" variant="body2">
          不可以
        </Typography>
      )}
    </Box>
  );
}
