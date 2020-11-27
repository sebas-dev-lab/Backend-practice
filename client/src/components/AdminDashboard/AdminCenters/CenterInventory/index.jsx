import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { centers } from "./hardcode.js";
import { useStyles as classAmdin } from "../../styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import CenterForm from "../CenterForm";
import Backdrop from "@material-ui/core/Backdrop";
import { StyledTableCell, StyledTableRow, useStyles } from "./styles";

const CenterInventory = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpne = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  const classesGlobal = classAmdin();
  const action = "update";

  return (
    <TableContainer component={Paper} className={classesGlobal.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Center</StyledTableCell>
            <StyledTableCell align="center">Admin</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">
              <CodeIcon />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {centers &&
            centers.map((center) => (
              <StyledTableRow key={center.centerName}>
                <StyledTableCell component="th" scope="row">
                  {center.centerName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {center.adminUser.name}
                </StyledTableCell>
                <StyledTableCell align="center">{center.place}</StyledTableCell>
                <StyledTableCell align="center">{center.phone}</StyledTableCell>
                <StyledTableCell align="center">{center.email}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={handleOpne}>
                    <EditIcon />
                  </Button>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleOpne}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <CenterForm action={action} />
      </Modal>
    </TableContainer>
  );
};

export default CenterInventory;
