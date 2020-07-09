import React from "react";
import { Input } from "../../shared/Input";
import { Employee } from "../../../models/entities/employee.class";
import { connect } from "react-redux";
import { alterEmployee } from "../../../store/actions/employees";
import { positions } from "../../../data";
import { IReducerState } from "../../../store";

interface IProps {
  employee: Employee | null;
  updateEmployee: (employee: Employee) => void;
}

function EditorPanelComponent({ employee, updateEmployee }: IProps) {
  return (
    <div className="container py-5">
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
              value={employee.birthDate?.toISOString().split("T")[0]}
              rusNaming="Дата рождения:"
              valueChangedHandler={(value: string) => {
                employee.birthDate = new Date(value);
                updateEmployee(employee);
              }}
              required={false}
            />
            <fieldset className="form-group">
              <legend className="col-form-label w-100">Пол:</legend>
              <div className="col-sm-10">
                <div className="form-check">
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
                  <label className="form-check-label">Мужской</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    checked={!employee.sex}
                    onChange={(event) => {
                      employee.sex = false;
                      updateEmployee(employee);
                    }}
                  />
                  <label className="form-check-label">Женский</label>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <label className="col-sm-2 mr-2">Уволен:</label>
              <div className="col-sm-9">
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
        </div>
      ) : (
        "Выберите сотрудника!"
      )}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  employee: state.employees.selected,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateEmployee: (employee: Employee) => dispatch(alterEmployee(employee)),
});

export const EditorPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorPanelComponent);
