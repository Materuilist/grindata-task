import React from "react";

import styles from "./styles.module.scss";
import { EmployeesList } from "./EmployeesList";
import { EditorPanel } from "./EditorPanel";
import { ToolBar } from "./ToolBar";
import { concatClasses } from "../../utils/concatClasses";
import { Employee } from "../../models/entities/employee.class";

interface IProps {
  employees: Employee[];
}

export function EmployeesEditor({ employees }: IProps) {
  return (
    <div
      className={concatClasses(styles.EmployeesEditor, "container h-100 py-5")}
    >
      <div className="row h-100">
        <div
          className={concatClasses(
            styles.ListWithToolBar,
            "col-sm-6 col-11 d-flex flex-column pb-5"
          )}
        >
          <ToolBar />
          <hr className="w-100" />
          <EmployeesList
          />
        </div>
        <div className={concatClasses(styles.EditorPanel, "col-sm-5 col-11 py-5")}>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
}
