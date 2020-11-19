import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import navLinks from "./routes";
import { useStyles, StyledMenu, StyledMenuItem } from "./Styles/makeStyles";
import Icons from "./iconButton";
import Button from "@material-ui/core/Button";
import Menu from "../Menu/index";
import ListTwoToneIcon from "@material-ui/icons/ListTwoTone";

const NavBar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleDrawer = () => (event) => {
    setState(!state);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.navbarDisplayFlex}>
          <Button onClick={toggleDrawer()}>
            <ListTwoToneIcon />
            <Menu toggleDrawer={toggleDrawer} state={state} />
          </Button>
          <Icons />
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.menuButton}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {" "}
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title}>
                  <StyledMenuItem>
                    <ArrowRightOutlinedIcon />
                    <MenuItem
                      onClick={handleClose}
                      className={classes.linkText}
                    >
                      {title}
                    </MenuItem>
                  </StyledMenuItem>
                </a>
              ))}
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
