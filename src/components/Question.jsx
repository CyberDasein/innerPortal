import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "30px",
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    flexDirection: "column",
  },
  btn: {
    marginLeft: "10px",
  },
  QuestionHeader: { backgroundColor: "#f0fff0"},
  text: {
    marginBottom: "20px",
  }, 
}));

const FormStyle = styled.div`
  .answer {
    margin-right: 20px;
    width: 40%;
  }
`;
const QuestionStyle = styled.div`
  background-color: "#f0fff0";
  margin-top: 32px;
  &:first-child {
    margin-top: 0;
  }
`;

const Question = ({
  questionTitle,
  answerQuestion,
  answers,
  id,
  deleteQuestion,
}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("");
  const [text, setText] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onClickHandler = (event) => {
    if (text !== "") {
      answerQuestion(text);
      setText("");
    }
  };
  return (
    <QuestionStyle>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          className={classes.QuestionHeader}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{questionTitle}</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <Typography className={classes.text}>{answers}</Typography>

          <FormStyle>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                onChange={(e) => setText(e.target.value)}
                className="answer"
                id="standard-basic"
                label="Ответить"
              />
              <Tooltip title="пока что недоступно" arrow>
                <IconButton onClick={onClickHandler} color="secondary">
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="удалить вопрос" arrow>
                <IconButton
                  onClick={() => {
                    deleteQuestion(id);
                  }}
                  className={classes.btn}
                  color="secondary"
                >
                  <HighlightOffIcon />
                </IconButton>
              </Tooltip>
            </form>
          </FormStyle>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </QuestionStyle>
  );
};
export default Question;
