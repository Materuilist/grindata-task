import {
  reducer as employeesReducer,
  IState as IEmployeesReducerState,
} from "./reducers/employees";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface IReducerState {
  employees: IEmployeesReducerState;
}

export const store = createStore(
  combineReducers({ employees: employeesReducer }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
