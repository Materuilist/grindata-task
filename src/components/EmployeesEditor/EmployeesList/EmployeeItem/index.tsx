import React from "react";
import { concatClasses } from "../../../../utils/concatClasses";
import styles from "./styles.module.scss";
import { Employee } from "../../../../models/entities/employee.class";
import { prettifyDate } from "../../../../utils/prettifyDate";
import { connect } from "react-redux";
import { IReducerState } from "../../../../store";
import { selectEmployee } from "../../../../store/actions/employees";

interface IProps {
  employee: Employee;
  isSelected: boolean;
  selectEmployee: (employee: Employee | null) => any;
}

function EmployeeItemComponent({
  employee,
  isSelected,
  selectEmployee,
}: IProps) {
  return (
    <div
      className={concatClasses(
        styles.EmployeeItem,
        `container-fluid mb-3${ isSelected? " " + styles.selected : ""}`
      )}
      onClick={() => selectEmployee(isSelected?null:employee)}
    >
      <div className="row py-2">
        <div className="col-6 col-md-7 d-flex flex-column justify-content-center">
          <div className="row text-right">
            <div className="col-12">
              {employee.fullName}{" "}
              <span className={concatClasses(styles.Sex, "ml-2")}>
                {employee.sex ? "М" : employee.sex === undefined ? "-" : "Ж"}
              </span>
            </div>
            <div className="col-12">{prettifyDate(employee.birthDate)}</div>
          </div>
        </div>
        <div className="col-6 col-md-5 d-flex flex-column justify-content-center text-right">
          <p className="mb-0">{employee.getPositionName()}</p>
          <p className="mb-0">
            {employee.isFired
              ? "Уволен"
              : employee.isFired === undefined
              ? "-"
              : "В штате"}
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IReducerState, ownProps:any) => ({
  isSelected: state.employees.selected?.id === ownProps.employee.id,
});

const mapDispatchToProps = (dispatch: any) => ({
  selectEmployee: (employee: Employee | null) =>
    dispatch(selectEmployee(employee)),
});

export const EmployeeItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeItemComponent);
