export interface RepairFormData {
  faultDescription?: {
    faultCategory?: number;
    canBootUp?: boolean;
    isNoteBook?: boolean;
    brandHardware?: string;
    modelHardware?: string;
    timeBroughtHardware?: string;
    detailHardware?: string;
    os?: number;
    osBitNumber?:number;
    brandSoftware?: string;
    modelSoftware?: string;
    timeBroughtSoftware?: string;
    detailSoftware?: string;
  };
  contactInfo?: {
    campus?: number;
    addr?: string;
    customInfo?: string;
  };
}

export interface FormStep {
  stepName: string,
  stepIndex: number,
  form: JSX.Element,
  description: string
}

export interface FormQuestionProps {
  repairFormData: RepairFormData;
  setRepairFormData: (repairFormData: RepairFormData) => void;
}