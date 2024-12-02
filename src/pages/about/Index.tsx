/*****
 * 关于我们
 */

import { Box, Container, Divider } from "@mui/material";
import Title from "./components/Title";
import TitleMobile from "./components/TitleMobile";
import About from "./components/About";
import Service from "./components/Service";
import Hints from "./components/Hints";
import Contact from "./components/Contact";
import { desktop, mobile } from "../../components/Display/DisplayMode";


export default function Index(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box sx={{display: desktop}} >
        <Title />
      </Box>
      <Box sx={{display: mobile}} >
        <TitleMobile />
      </Box>
      <Divider />
      <Box>
        <About />
      </Box>
      <Divider />
      <Box>
        <Service />
      </Box>
      <Divider />
      <Box>
        <Hints />
      </Box>
      <Divider />
      <Box>
        <Contact />
      </Box>
    </Container >
  );
}
