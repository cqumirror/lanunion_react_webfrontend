import { Container, TextField , Button, Paper, Step, StepContent, StepLabel, Stepper, Typography, AlertTitle, Alert} from "@mui/material";
import React, { useState } from "react";
import { Question, setItem } from "./FormQuestions";

const styles = {
    root: {
      width: "100%"
    },
    button: {
      marginTop: 1,
      marginRight: 1
    },
    actionsContainer: {
      marginBottom: 1
    },
    resetContainer: {
      padding: 1
    }
  }

const steps = ["故障类别", "故障描述", "联系方式"];

export default function RepairForm(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0);
  const [repairInfo, setRepairInfo] = useState({
    故障类别: "软件故障",
    故障机型: "笔记本",
    操作系统: "Windows 10",
    能否正常开机: "可以",
    购买时间: "<1年",
    系统位数: "64位"
  });
  // console.log(repairInfo);

  const handleChange = (prop: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRepairInfo({ ...repairInfo, [prop]: event.target.value });
  };

  const DetailedDescription = (): JSX.Element => {
    return (
      <>
        <Alert severity="warning">
          <AlertTitle>
            请尽可能详细地描述故障，以便蓝客大致推测故障原因。参考下面提示:
          </AlertTitle>
          1.
          故障都包括哪些现象（屏幕显示、特殊声音、运行速度、风扇速度、热量大小等）
          <br />
          2.
          故障出现时你正在做什么（正在运行什么软件、开机或关机到了哪个步骤、是否浸入液体等）
          <br />
          3.
          故障发生频率（这个故障是偶然发生还是规律性发生，在什么条件下会发生，在这个条件下是可能发生还是一定会发生）
          <br />
          4.
          你的处理措施（你曾经尝试过哪些解决方法，比如卸载某些软件、重装驱动、重装系统，是否使用某安全卫士尝试修复）
        </Alert>
        <TextField
          key="详细描述"
          style={{ margin: 10, width: "80%" }}
          label="详细描述"
          multiline
          rows="4"
          onChange={(e): void => setItem("详细描述", e.target.value)}
        />
      </>
    );
  };

  const SoftwareFailureDescription = (): JSX.Element => {
    return (
      <>
        <Question
          title="操作系统"
          options={[
            "Windows 10",
            "Windows 8",
            "Windows 7",
            "Windows XP",
            "Linux",
            "Mac OS"
          ]}
          value={repairInfo.操作系统}
          handleChange={handleChange}
        />
        <Question
          title="系统位数"
          options={["64位", "32位", "不确定"]}
          value={repairInfo.系统位数}
          handleChange={handleChange}
        />
        <DetailedDescription />
      </>
    );
  };
  const HardwareFailureDescription = (): JSX.Element => {
    return (
      <>
        <Question
          title="能否正常开机"
          options={["可以", "不可以"]}
          value={repairInfo.能否正常开机}
          handleChange={handleChange}
        />
        <Question
          title="故障机型"
          options={["笔记本", "台式机"]}
          value={repairInfo.故障机型}
          handleChange={handleChange}
        />
        <Question
          title="购买时间"
          options={["<1年", "1～2年", ">2年", "不确定"]}
          value={repairInfo.购买时间}
          handleChange={handleChange}
        />
        <Question title="电脑品牌" handleChange={handleChange} />
        <Question title="电脑型号" handleChange={handleChange} />
        <DetailedDescription />
      </>
    );
  };
  const InternetFailureDescription = (): JSX.Element => {
    return (
      <Typography>
        *友情提示：蓝盟不负责教学区和办公区的网络故障处理。请拨打网络中心故障报修电话：65111500
      </Typography>
    );
  };

  const Content = ({ step }: any): JSX.Element => {
    switch (step) {
      case 0:
        return (
          <Question
            title="故障类别"
            options={["软件故障", "硬件故障", "校园网故障"]}
            value={repairInfo.故障类别}
            handleChange={handleChange}
          />
        );

      // 故障描述
      case 1:
        switch (repairInfo.故障类别) {
          case "硬件故障":
            return <HardwareFailureDescription />;
          case "软件故障":
            return <SoftwareFailureDescription />;
          case "校园网故障":
            return <InternetFailureDescription />;
          default:
            return <Typography>未找到</Typography>;
        }

      // 联系方式
      case 2:
        return (
          <>
            <Question required title="维修地址" handleChange={handleChange} />
            <Question required title="手机号码" handleChange={handleChange} />
            <Question required title="QQ" handleChange={handleChange} />
            <Question required title="姓名" handleChange={handleChange} />
          </>
        );
      default:
        return <br />;
    }
  };

  const handleNext = (): void => {
    if (activeStep === steps.length - 1) {
      // submmit
      console.log({
        ...repairInfo,
        ...JSON.parse(sessionStorage.getItem("repairInfo") || "{}")
      });
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = (): void => {
    sessionStorage.removeItem("repairInfo");
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg">
        <Typography style={{ padding: 10 }}>
          请认真详细地填写下面的页面描述您所遇到的故障，我们将会尽快安排蓝客与您取得联系。
          蓝盟的服务范围为重庆大学A、B、C区和虎溪校区。
        </Typography>
    </Container>
  );
}
