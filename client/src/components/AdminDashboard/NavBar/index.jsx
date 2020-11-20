import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import navLinks from "./routes";
import Icons from "./iconButton";
import Menu from "../Menu/index";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { StyledMenuItem, StyledMenu } from "../styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const NavBar = ({ classNavbar }) => {
  const classes = classNavbar;
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {}, []);

  const toggleDrawer = (event) => {
    setState(!state);

    if (state === false) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleMenu = (event) => {
    setMenu(!menu);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Toolbar className={classes.navDisplayFlex}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu
                id="simple-menu"
                toggleDrawer={toggleDrawer}
                state={state}
                onClose={handleClose}
                open={open}
              />
              <MenuIcon />
            </IconButton> */}
            <Icons classIcons={classes} />
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.menuButton}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                open={menu}
                onClose={handleMenu}
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
            </IconButton>
          </Toolbar>
        </ClickAwayListener>
      </AppBar>
      <div className={classNavbar.offset}></div>
    </div>
  );
};

export default NavBar;
