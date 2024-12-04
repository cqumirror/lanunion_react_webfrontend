import { LuHouse } from "react-icons/lu";
import { IconBaseProps } from "react-icons";
import IconBox from "../components/IconBox";

export default function IconHouse(props: IconBaseProps): JSX.Element {
  return <IconBox icon={LuHouse} props={props} />;
}