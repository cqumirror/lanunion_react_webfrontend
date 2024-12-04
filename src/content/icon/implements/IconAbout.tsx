import React from "react";
import { LuInfo } from "react-icons/lu";
import { IconBaseProps } from "react-icons";
import IconBox from "../components/IconBox";

export default function IconAbout(props: IconBaseProps): JSX.Element {
  return <IconBox icon={LuInfo} props={props} />;
}