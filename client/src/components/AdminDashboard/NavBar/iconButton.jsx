import React from "react";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "./Styles/makeStyles";

const Icons = () => {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        // onClick={handleMenu}
        color="inherit"
        // className={classes.menuButton}
      >
        <Tooltip title="To do" aria-label="To do">
          <PlaylistAddCheckOutlinedIcon alt="Remy Sharp" />
        </Tooltip>
      </IconButton>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        // onClick={handleMenu}
        color="inherit"
        // className={classes.menuButton}
      >
        <Tooltip title="Resume" aria-label="Resume">
          <TimelineOutlinedIcon />
        </Tooltip>
      </IconButton>
    </div>
  );
};

export default Icons;
