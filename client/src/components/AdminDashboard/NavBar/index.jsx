import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, MenuItem } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import navLinks from "./routes";
import Icons from "./iconButton";
import Menu from "../Menu/index";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { StyledMenuItem, StyledMenu } from "../styles";

const NavBar = ({ classNavbar }) => {
  const classes = classNavbar;
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const open = Boolean(anchorEl);

  const toggleDrawer = (event) => {
    setState(!state);
    if (state === false) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenu = (event) => {
    setMenu(!menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.navDisplayFlex}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <Menu
            toggleDrawer={toggleDrawer}
            state={state}
            classMenu={classes}
            onClose={handleClose}
            open={open}
            menu={menu}
          />
          <MenuIcon />
        </IconButton>
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
          open={menu}
          onClose={handleMenu}
        >
          {" "}
          {navLinks.map(({ title, path }) => (
            <a href={path} key={title}>
              <StyledMenuItem>
                <ArrowRightOutlinedIcon />
                <MenuItem onClick={handleClose} className={classes.linkText}>
                  {title}
                </MenuItem>
              </StyledMenuItem>
            </a>
          ))}
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
