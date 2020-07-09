import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles.module.scss";
import { removeEmployee } from "../../../store/actions/employees";
import { connect } from "react-redux";
import { IReducerState } from "../../../store";

interface IProps {
  selectedEmployeeId: number;
  deleteEmployee: (id: number) => void;
}

function ToolBarComponent({ selectedEmployeeId, deleteEmployee }: IProps) {
  const deleteButtonActive: boolean = selectedEmployeeId !== -1;
  return (
    <div className="text-right pt-2">
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

const mapStateToProps = (state:IReducerState)=>({
  selectedEmployeeId:state.employees.selected?.id || -1
})

const mapDispatchToProps = (dispatch: any) => ({
  deleteEmployee: (id: number) => dispatch(removeEmployee(id)),
});

export const ToolBar = connect(mapStateToProps, mapDispatchToProps)(ToolBarComponent);
