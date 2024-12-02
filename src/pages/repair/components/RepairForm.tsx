import { Box, Container, Typography } from "@mui/material";
import FormNotice from "./FormNotice";
import FormQuestions from "./FormQuestions";
import { desktop } from "../../../components/Display/DisplayMode";



export default function RepairForm(): JSX.Element {

  const styles = {
    RepairFormContainer: {
      maxWidth: "md"
    },
    FormQuestionsContainer: {
      width: "md"
    }
  }

  return (
    <Container sx={styles.RepairFormContainer}>
      <FormNotice />
      <Container sx={{ ...styles.FormQuestionsContainer, display: desktop }}><FormQuestions /></Container>
    </Container >
  );
}
