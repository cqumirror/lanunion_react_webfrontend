import React from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { FormQuestionProps } from "../RepairForm";

export default function FaultDescriptionSoftware({ repairFormData, setRepairFormData }: FormQuestionProps): JSX.Element {
  const [canOpen, setCanOpen] = React.useState<number | string>(0);
  const [isLaptop, setIsLaptop] = React.useState<number | string>(0);

  const handleCanOpenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanOpen((event.target as HTMLInputElement).value);
  };

  const handleIsLaptopChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLaptop((event.target as HTMLInputElement).value);
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
      gap: 2
    },
    BrandBox: {
      display: "flex",
      flexDirection: "row",
      gap: 2
    }
  }

  return (
    <Box sx={styles.OuterBox}>
      <Box sx={styles.RadioGroupOuterBox}>
        <Box sx={styles.RadioGroupBox}>
          <Typography sx={{ minWidth: "240px" }}>
            您设备目前是否能够正常启动
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup row value={canOpen} onChange={handleCanOpenChange}>
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
            <RadioGroup row value={isLaptop} onChange={handleIsLaptopChange}>
              <FormControlLabel value={0} control={<Radio />} label="是" />
              <FormControlLabel value={1} control={<Radio />} label="否" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box sx={styles.BrandBox}>
        <TextField fullWidth label="品牌" variant="outlined" />
        <TextField fullWidth label="型号" variant="outlined" />
        <TextField fullWidth label="购买时间" variant="outlined" />
      </Box>
      <TextField multiline rows={4} fullWidth label="详细描述" variant="outlined" helperText="请尽量描述故障信息" />
    </Box>
  );
}
