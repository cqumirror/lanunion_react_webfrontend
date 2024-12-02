import { RepairFormData } from "./FormQuestions";

export default function formQuestionNextStepDisable(repairFormData: RepairFormData, step: number) {
  switch (step) {
    case 0:
      return ![0, 1, 2].includes(repairFormData.faultDescription?.faultCategory ?? -1);
    case 1:
      switch (repairFormData.faultDescription?.faultCategory ?? -1) {
        case 0:
          return false;
        case 1:
          return false;
        case 2:
          return true;
        default:
          return true;
      }
  }
}