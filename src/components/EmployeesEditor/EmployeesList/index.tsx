import React from "react";
import { connect } from "react-redux";

import { Employee } from "../../../models/entities/employee.class";
import { IReducerState } from "../../../store";
import { EmployeeItem } from "./EmployeeItem";
import styles from './styles.module.scss';
import { concatClasses } from "../../../utils/concatClasses";

interface IProps {
  employees: Employee[];
}

function EmployeesListComponent({
  employees,
}: IProps) {
  return (
    <div className={concatClasses(styles.EmployeesList, 'pr-3')}>
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
