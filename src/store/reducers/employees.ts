import _ from 'lodash'

import { Employee } from "../../models/entities/employee.class";
import { employees } from "../../data";
import { IAction } from "../../models/action.interface";
import * as actionTypes from "../actions/types";

export interface IState {
  data: Employee[];
  selected: Employee | null;
}

const initialState: IState = { data: [...employees], selected: null };

export const reducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case actionTypes.ADD_USER: {
      return {
        ...state,
        data: [...state.data, action.newEmployee],
        selected: action.newEmployee,
      };
    }
    case actionTypes.ALTER_USER: {
      const newUser = _.cloneDeep(action.employee);
      return {
        ...state,
        data: [
          ...state.data.map((employee) =>
            employee.id === newUser.id ? newUser : employee
          ),
        ],
        selected: newUser,
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
        selected: null,
      };
    }
    case actionTypes.SELECT_EMPLOYEE: {
      return {
        ...state,
        selected: _.cloneDeep(action.employee),
      };
    }
    default: {
      return state;
    }
  }
};
