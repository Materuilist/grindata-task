import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./styles.module.scss";
import { removeEmployee, addEmployee } from "../../../store/actions/employees";
import { connect } from "react-redux";
import { IReducerState } from "../../../store";
import { Employee } from "../../../models/entities/employee.class";

interface IProps {
  selectedEmployeeId: number;
  deleteEmployee: (id: number) => void;
  maxId: number;
  addEmployee: (id: number) => any;
}

function ToolBarComponent({
  selectedEmployeeId,
  deleteEmployee,
  addEmployee,
  maxId,
}: IProps) {
  const deleteButtonActive: boolean = selectedEmployeeId !== -1;
  return (
    <div className="text-right pt-2">
      <AddBoxIcon
        className={styles.AddButton}
        onClick={() => addEmployee(maxId + 1)}
      />
      <DeleteIcon
        className={styles.DeleteButton}
        style={{
          opacity: deleteButtonActive ? "1" : ".3",
          cursor: deleteButtonActive ? "pointer" : "auto",
        }}
        onClick={
          deleteButtonActive
            ? () => deleteEmployee(selectedEmployeeId)
            : () => {}
        }
      />
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  selectedEmployeeId: state.employees.selected?.id || -1,
  maxId: state.employees.data.reduce(
    (prevValue, employee) =>
      employee.id > prevValue ? employee.id : prevValue,
    0
  ),
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  deleteEmployee: (id: number) => dispatch(removeEmployee(id)),
  addEmployee: (id: number) => dispatch(addEmployee(new Employee(id))),
});

export const ToolBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBarComponent);
