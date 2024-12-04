/*******
 * 关于我们
 */

import { Container, Divider } from "@mui/material";
import { Title, About, Service, Hints, Contact } from "./components";

export default function AboutPage(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Title />
      <Divider />
      <About />
      <Divider />
      <Service />
      <Divider />
      <Hints />
      <Divider />
      <Contact />
    </Container >
  );
}
