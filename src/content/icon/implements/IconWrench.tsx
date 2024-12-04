import React from "react";
import { LuWrench } from "react-icons/lu";
import { IconBaseProps } from "react-icons";
import IconBox from "../components/IconBox";

export default function IconWrench(props: IconBaseProps): JSX.Element {
  return <IconBox icon={LuWrench} props={props} />;
}