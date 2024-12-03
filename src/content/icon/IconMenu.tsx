import React from "react";
import { LuMenu } from "react-icons/lu";
import { IconBaseProps } from "react-icons";
import IconBox from "./components/IconBox";

export default function CircleUserRound(props: IconBaseProps): JSX.Element {
  return <IconBox icon={LuMenu} props={props} />;
}