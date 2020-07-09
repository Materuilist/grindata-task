import React from "react";
import { concatClasses } from "../../../../utils/concatClasses";
import styles from "./styles.module.scss";
import { Employee } from "../../../../models/entities/employee.class";
import { prettifyDate } from "../../../../utils/prettifyDate";

interface IProps {
  isSelected: boolean;
  clickHandler: any;
  employee: Employee;
}

export function EmployeeItem({ employee, isSelected, clickHandler }: IProps) {
  return (
    <div
      className={concatClasses(
        styles.EmployeeItem,
        `container-fluid mb-3${isSelected ? " " + styles.selected : ""}`
      )}
      onClick={() => clickHandler(employee.id)}
    >
      <div className="row py-2">
        <div className="col-6 col-md-7 d-flex flex-column justify-content-center">
          <div className="row text-right">
            <div className="col-12">
              {employee.fullName}{" "}
              <span className={concatClasses(styles.Sex, "ml-2")}>
                {employee.sex ? "М" : "Ж"}
              </span>
            </div>
            <div className="col-12">{prettifyDate(employee.birthDate)}</div>
          </div>
        </div>
        <div className="col-6 col-md-5 d-flex flex-column justify-content-center text-right">
          <p className="mb-0">{employee.getPositionName()}</p>
          <p className="mb-0">{employee.isFired ? "Уволен" : "В штате"}</p>
        </div>
      </div>
    </div>
  );
}
