import { RepairFormData } from "./RepairForm";

export default function formQuestionNextStepDisable(repairFormData: RepairFormData, step: number) {
  switch (step) {
    case 1:
      return ![0, 1, 2].includes(repairFormData.faultDescription?.faultCategory ?? -1);
    case 2:
      switch (repairFormData.faultDescription?.faultCategory ?? -1) {
        case 0:
          return repairFormData.faultDescription?.isApple;
        case 1:
          return false;
        case 2:
          return true;
        default:
          return true;
      }
  }
}