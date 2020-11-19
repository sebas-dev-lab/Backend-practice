import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./Styles/makeStyles";
import { menuLinks } from "./routes";

export default function Menu({ state, toggleDrawer }) {
  const classes = useStyles();
  const { _list, fullList } = classes;

  const list = () => (
    <div
      className={`${_list} ${fullList}`}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Divider />
      <List>
        {menuLinks.map(({ title, path, Icon }) => (
          <ListItem button key={title}>
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
      <Drawer open={state} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
