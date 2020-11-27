import DomainIcon from "@material-ui/icons/Domain";
import AddIcon from "@material-ui/icons/Add";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import MapIcon from "@material-ui/icons/Map";
export const menuLinks = [
  {
    title: "Centers Resume",
    path: "/admin/center",
    Icon: DomainIcon,
  },
  {
    title: "Add New Center",
    path: "/admin/center/add",
    Icon: AddIcon,
  },
  {
    title: "Centers Inventory",
    path: "/admin/center/inventory",
    Icon: AllInboxIcon,
  },
  {
    title: "Location Centers",
    path: "/admin/center/map",
    Icon: MapIcon,
  },
];
