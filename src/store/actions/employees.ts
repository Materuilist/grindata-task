import * as actionTypes from "./types";
import { Employee } from "../../models/entities/employee.class";
import { IAction } from "../../models/action.interface";

export const addEmployee = (newEmployee: Employee): IAction => ({
  type: actionTypes.ADD_USER,
  newEmployee,
});

export const removeEmployee = (employeeId: number): IAction => ({
  type: actionTypes.REMOVE_USER,
  employeeId,
});

export const alterEmployee = (employee: Employee): IAction => ({
  type: actionTypes.ALTER_USER,
  employee,
});

export const selectEmployee = (employee: Employee | null): IAction => ({
  type: actionTypes.SELECT_EMPLOYEE,
  employee,
});