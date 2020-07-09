import React from "react";
import { Employee } from "../../../models/entities/employee.class";
import { connect } from "react-redux";
import { IReducerState } from "../../../store";

interface IProps {
  employees: Employee[];
  isSelecting: boolean;
  selectedEmployeeId: number;
}

function EmployeesListComponent({
  employees,
  isSelecting,
  selectedEmployeeId,
}: IProps) {
  return <div>{employees.map((emp) => emp.fullName)}</div>;
}

const mapStateToProps = (state: IReducerState) => ({
  employees: state.employees.data,
});

export const EmployeesList = connect(mapStateToProps)(EmployeesListComponent);
