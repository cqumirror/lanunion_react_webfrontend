import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FormQuestionProps } from "../interfaces";

export default function ContactInfo({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {

  const styles = {
    ContactInfoBox: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "80%",
    },
    ContactInfoFirstLineBox: {
      display: "flex",
      gap: 2,
      alignItems: "center"
    },
    ContactInfoCampusFormControl: {
      maxWidth: "85pt",
    },
  }

  const handleCampusChange = (event: SelectChangeEvent) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, campus: parseInt(event.target.value) } });
  };

  const handleAddrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, addr: event.target.value } });
  };

  const handleCustomInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, contactInfo: { ...repairFormData.contactInfo, customInfo: event.target.value } });
  };

  return (
    <Box sx={styles.ContactInfoBox}>
      <Box sx={styles.ContactInfoFirstLineBox}>
        <FormControl fullWidth sx={styles.ContactInfoCampusFormControl}>
          <InputLabel>校区</InputLabel>
          <Select
            value={String(repairFormData.contactInfo?.campus)}
            onChange={handleCampusChange}
            label="校区"
          >
            <MenuItem value={0}>A区</MenuItem>
            <MenuItem value={1}>B区</MenuItem>
            <MenuItem value={2}>C区</MenuItem>
            <MenuItem value={3}>虎溪校区</MenuItem>
          </Select>
        </FormControl>
        <TextField fullWidth label="详细地址" variant="outlined"
          value={repairFormData.contactInfo?.addr}
          onChange={handleAddrChange} />
      </Box>
      <TextField multiline rows={2} fullWidth label="额外信息" variant="outlined" helperText="如期望维修时间等"
        value={repairFormData.contactInfo?.customInfo}
        onChange={handleCustomInfoChange} />
    </Box>
  );
};
