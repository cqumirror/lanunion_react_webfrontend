import { LuMenu } from "react-icons/lu";
import { IconBaseProps } from "react-icons";
import IconBox from "../components/IconBox";

export default function IconMenu(props: IconBaseProps): JSX.Element {
  return <IconBox icon={LuMenu} props={props} />;
}