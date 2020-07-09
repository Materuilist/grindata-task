import React, { useState } from "react";

import styles from "./styles.module.scss";
import { EmployeesList } from "./EmployeesList";
import { EditorPanel } from "./EditorPanel";
import { ToolBar } from "./ToolBar";
import { concatClasses } from "../../utils/concatClasses";
import { Employee } from "../../models/entities/employee.class";

export function EmployeesEditor() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <div
      className={concatClasses(styles.EmployeesEditor, "container h-100 py-5")}
    >
      <div className="row h-100">
        <div
          className={concatClasses(
            styles.ListWithToolBar,
            "col-6 mr-5 d-flex flex-column h-100"
          )}
        >
          <ToolBar selectedEmployeeId={selectedEmployee?.id || -1} />
          <hr className="w-100"/>
          <EmployeesList selectedEmployeeId={selectedEmployee?.id || -1} isSelecting={false} />
        </div>
        <div className={concatClasses(styles.EditorPanel, "col-5 h-100")}>Man</div>
      </div>
    </div>
  );
}
