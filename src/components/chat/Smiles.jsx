import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  emoji: {
      display: "inline-flex",
      flexWrap: "wrap",
      maxWidth: 200
  },
}));

export default function SmileComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip title="смайлы" arrow>
        <IconButton
          className={classes.IconButton}
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
          color="secondary"
        >
          <InsertEmoticonIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <div
            className={classes.emoji}
            onClick={(e) => props.smileChange(e.target.dataset.value)}
          >
            <span role="img" data-value="&#128525;" aria-label="love">
              &#128525;
            </span>
            <span role="img" data-value="&#128513;" aria-label="laugh">
              &#128513;
            </span>
            <span role="img" data-value="&#128513;" aria-label="joke">
              &#128518;
            </span>
            <span role="img" data-value="&#128513;" aria-label="evil">
              &#128520;
            </span>
            <span role="img" data-value="&#128513;" aria-label="cry">
              &#128549;
            </span>
            <span role="img" data-value="&#128513;" aria-label="surprise">
              &#128584;
            </span>
            <span role="img" data-value="&#128513;" aria-label="exiting">
              &#128562;
            </span>
            <span role="img" data-value="&#128513;" aria-label="virus">
              &#128567;
            </span>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
