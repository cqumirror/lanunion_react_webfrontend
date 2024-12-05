import React from "react";
import { Container, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormQuestionProps } from "../RepairForm";
import { desktop, mobile } from "../../../../components/Display/DisplayMode";

export default function FaultCategory({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
  return (
    <>
      <FaultCategoryDesktop repairFormData={repairFormData} setRepairFormData={setRepairFormData} />
      <FaultCategoryMobile repairFormData={repairFormData} setRepairFormData={setRepairFormData} />
    </>
  )
}

export function FaultCategoryDesktop({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, faultCategory: parseInt(event.target.value) } });
  };

  return (
    <FormControl sx={{ display: desktop }}>
      <RadioGroup
        aria-labelledby="form-questions-fault-catagory-group-label"
        name="form-questions-fault-catagory"
        value={repairFormData.faultDescription?.faultCategory ?? ""}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio />} label="硬件故障" />
        <FormControlLabel value="1" control={<Radio />} label="软件故障" />
        <FormControlLabel value="2" control={<Radio />} label="校园网故障" />
      </RadioGroup>
    </FormControl>
  );
};

export function FaultCategoryMobile({ repairFormData, setRepairFormData, }: FormQuestionProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepairFormData({ ...repairFormData, faultDescription: { ...repairFormData.faultDescription, faultCategory: parseInt(event.target.value) } });
  };

  return (
    <FormControl sx={{ display: mobile }}>
      <RadioGroup
        aria-labelledby="form-questions-fault-catagory-group-label"
        name="form-questions-fault-catagory"
        value={repairFormData.faultDescription?.faultCategory ?? ""}
        onChange={handleChange}
      >
        <FormControlLabel value="0" control={<Radio />} label="硬件故障" />
        <FormControlLabel value="1" control={<Radio />} label="软件故障" />
        <FormControlLabel value="2" control={<Radio />} label="校园网故障" />
      </RadioGroup>
    </FormControl>
  );
};