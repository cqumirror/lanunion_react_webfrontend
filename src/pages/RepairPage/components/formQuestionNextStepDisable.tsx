import React from "react";
import { RepairFormData } from "./interfaces";

export default function formQuestionNextStepDisable(repairFormData: RepairFormData, step: number) {
  switch (step) {
    case 0:
      return false;
    case 1:
      return ![0, 1, 2].includes(repairFormData.faultDescription?.faultCategory ?? -1);
    case 2:
      switch (repairFormData.faultDescription?.faultCategory ?? -1) {
        case 0:
          return !(
            repairFormData.faultDescription?.canBootUp !== undefined &&
            repairFormData.faultDescription?.isNoteBook !== undefined &&
            repairFormData.faultDescription?.brandHardware !== undefined &&
            repairFormData.faultDescription?.modelHardware !== undefined &&
            repairFormData.faultDescription?.timeBroughtHardware !== undefined &&
            repairFormData.faultDescription?.detailHardware !== undefined
          );
        case 1:
          return !(
            repairFormData.faultDescription?.os !== undefined &&
            repairFormData.faultDescription?.osBitNumber !== undefined &&
            repairFormData.faultDescription?.brandSoftware !== undefined &&
            repairFormData.faultDescription?.modelSoftware !== undefined &&
            repairFormData.faultDescription?.timeBroughtSoftware !== undefined &&
            repairFormData.faultDescription?.detailSoftware !== undefined
          );
        case 2:
          return true;
        default:
          return true;
      }
    case 3:
      return !(
        repairFormData.contactInfo?.campus !== undefined &&
        repairFormData.contactInfo?.addr !== undefined
      );
    case 4:
      return false;
    default:
      return true;
  }
}