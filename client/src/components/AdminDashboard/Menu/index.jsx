import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { menuLinks } from "./routes";
import { useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";

export default function Menu({
  state,
  toggleDrawer,
  classMenu,
  onClose,
  menu,
}) {
  const { drawer, drawerPaper, drawerHeader } = classMenu;
  const theme = useTheme();

  const list = () => (
    <div
      onKeyDown={onClose}
      className={drawer}
      variant="persistent"
      anchor="left"
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuLinks.map(({ title, path, Icon }) => (
          <ListItem button key={title} onClick={onClose}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} path={path} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={state}>{list()}</Drawer>
    </div>
  );
}
