import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles.module.scss";
import { removeEmployee } from "../../../store/actions/employees";
import { connect } from "react-redux";

interface IProps {
  selectedEmployeeId: number;
  deleteEmployee: (id: number) => void;
}

function ToolBarComponent({ selectedEmployeeId, deleteEmployee }: IProps) {
  const deleteButtonActive: boolean = selectedEmployeeId !== -1;
  return (
    <div>
      <AddBoxIcon className={styles.AddButton} />
      <DeleteIcon
        className={styles.DeleteButton}
        style={{
          opacity: deleteButtonActive ? "1" : ".3",
          cursor: deleteButtonActive ? "pointer" : "auto",
        }}
        onClick={deleteButtonActive?()=>deleteEmployee(selectedEmployeeId):()=>{}}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  deleteEmployee: (id: number) => dispatch(removeEmployee(id)),
});

export const ToolBar = connect(null, mapDispatchToProps)(ToolBarComponent);
