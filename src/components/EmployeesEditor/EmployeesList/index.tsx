import React from "react";
import { Employee } from "../../../models/entities/employee.class";
import { connect } from "react-redux";
import { IReducerState } from "../../../store";
import { EmployeeItem } from "./EmployeeItem";

interface IProps {
  employees: Employee[];
}

function EmployeesListComponent({
  employees,
}: IProps) {
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeItem
          key={emp.id}
          employee={emp}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  employees: state.employees.data,
});

export const EmployeesList = connect(mapStateToProps)(EmployeesListComponent);
