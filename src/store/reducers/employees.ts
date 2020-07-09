import { Employee } from "../../models/entities/employee.class";
import { employees } from "../../data";
import { IAction } from "../../models/action.interface";
import * as actionTypes from "../actions/types";

export interface IState {
  data: Employee[];
}

const initialState: IState = { data: [...employees] };

export const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return {
        ...state,
        data: [...state.data, action.newEmployee],
      };
    }
    case actionTypes.ALTER_USER: {
      return {
        ...state,
        data: [
          ...state.data.map((employee) =>
            employee.id === action.employee.id ? action.employee : employee
          ),
        ],
      };
    }
    case actionTypes.REMOVE_USER: {
      return {
        ...state,
        data: [
          ...state.data.filter(
            ({ id: employeeId }) => employeeId !== action.employeeId
          ),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
