import { Box, Container, Typography } from "@mui/material";
import FormQuestions from "./FormQuestions";
import { desktop } from "../../../components/Display/DisplayMode";



export default function RepairForm(): JSX.Element {

  const styles = {
    RepairFormContainer: {
      maxWidth: "md",
      marginTop: 5
    },
    FormQuestionsContainer: {
      width: "md"
    }
  }

  return (
    <Container sx={styles.RepairFormContainer}>
      <Container sx={{ ...styles.FormQuestionsContainer }}><FormQuestions /></Container>
    </Container >
  );
}

// TODO 合并