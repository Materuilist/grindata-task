import React from "react";
import { connect } from "react-redux";

import { Input } from "../../shared/Input";
import { Employee } from "../../../models/entities/employee.class";
import { alterEmployee } from "../../../store/actions/employees";
import { positions } from "../../../data";
import { IReducerState } from "../../../store";
import { concatClasses } from "../../../utils/concatClasses";
import styles from "./styles.module.scss";

interface IProps {
  employee: Employee | null;
  employees: Employee[];
  updateEmployee: (employee: Employee) => void;
}

function EditorPanelComponent({ employee, updateEmployee, employees }: IProps) {
  return (
    <div className={concatClasses(styles.Main, "container h-100")}>
      {employee ? (
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <Input
              value={employee?.fullName}
              rusNaming="ФИО:"
              required={true}
              type="text"
              valueChangedHandler={(value: string) => {
                employee.fullName = value;
                updateEmployee(employee);
              }}
            />
            <div className="form-group">
              <label>Должность:</label>
              <select
                className="form-control"
                value={employee.getPositionName()}
                onChange={(event) => {
                  employee.position = employee.getPosition(event.target.value);
                  updateEmployee(employee);
                }}
              >
                {[...positions.entries()].map((pos) => (
                  <option key={pos[0]}>{pos[1]}</option>
                ))}
              </select>
            </div>
            <Input
              type="date"
              value={
                employee.birthDate
                  ? employee.birthDate.toISOString().split("T")[0]
                  : ""
              }
              rusNaming="Дата рождения:"
              valueChangedHandler={(value: string) => {
                if (new Date(value).toString() === "Invalid Date") {
                  return;
                }
                employee.birthDate = new Date(value);
                updateEmployee(employee);
              }}
              required={false}
            />
            <fieldset className="form-group">
              <legend className="col-form-label w-100">Пол:</legend>
              <div className="col-10">
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    checked={employee.sex}
                    onChange={(event) => {
                      employee.sex = true;
                      updateEmployee(employee);
                    }}
                  />
                  <label className="form-check-label ml-3">Мужской</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    checked={employee.sex === false}
                    onChange={(event) => {
                      employee.sex = false;
                      updateEmployee(employee);
                    }}
                  />
                  <label className="form-check-label ml-3">Женский</label>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <div className="col-12 d-flex">
                <label className={concatClasses(styles.FitContent, "mr-2")}>
                  Уволен:
                </label>
                <div>
                  <div className="form-check pt-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={employee.isFired}
                      onChange={(event) => {
                        employee.isFired = event.target.checked;
                        updateEmployee(employee);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {employees.length === 1 ? null : (
              <div className="form-group">
                <label>Коллеги:</label>
                <select
                  multiple
                  className="form-control"
                  value={employees
                    .filter(
                      (emp) =>
                        employee.colleagues?.find((e) => e === emp.id) !==
                        undefined
                    )
                    .map((emp) => emp.id.toString())}
                  onChange={(event) => {
                    const colleagues = [...event.target.selectedOptions].map(
                      (option) => +option.value
                    );
                    employee.colleagues = colleagues;
                    updateEmployee(employee);
                  }}
                >
                  {employees
                    .filter((emp) => emp.id !== employee.id)
                    .map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.fullName}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={concatClasses(styles.Label, "text-center")}>
          Выберите сотрудника!
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  employee: state.employees.selected,
  employees: state.employees.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateEmployee: (employee: Employee) => dispatch(alterEmployee(employee)),
});

export const EditorPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorPanelComponent);
