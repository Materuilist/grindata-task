import React from "react";
import { Employee } from "../../../models/entities/employee.class";
import { connect } from "react-redux";
import { IReducerState } from "../../../store";
import { EmployeeItem } from "./EmployeeItem";

interface IProps {
  employees: Employee[];
  selectedEmployeeId: number;
  employeeSelectedHandler: any;
}

function EmployeesListComponent({
  employees,
  selectedEmployeeId,
  employeeSelectedHandler,
}: IProps) {
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeItem
          key={emp.id}
          employee={emp}
          isSelected={emp.id === selectedEmployeeId}
          clickHandler={employeeSelectedHandler}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  employees: state.employees.data,
});

export const EmployeesList = connect(mapStateToProps)(EmployeesListComponent);
