import React from "react";
import { Divider, ListItemIcon, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { menuLinks } from "./routes.js";
import { Link } from "react-router-dom";

const MenuCenter = ({ classMenu }) => {
  return (
    <div
      className={classMenu.drawer}
      variant="persistent"
      anchor="left"
      classes={{
        paper: classMenu.drawerPaper,
      }}
    >
      <Divider />
      <List component="nav">
        {menuLinks.map(({ title, path, Icon }) => (
          <ListItem
            button
            key={title}
            color="primary"
            component={Link}
            to={path}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuCenter;
