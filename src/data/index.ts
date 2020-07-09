import { PositionOption } from "../models/entities/position-option.enum";
import { Employee } from "../models/entities/employee.class";

export const positions = new Map<PositionOption, string>([
  [PositionOption.Developer, "Разработчик"],
  [PositionOption.Designer, "Дизайнер"],
  [PositionOption.TeamLead, "Тимлид"],
  [PositionOption.HR, "HR"],
]);

export const employees: Employee[] = [
  new Employee(
    1,
    "Иванов Иван Иванович",
    PositionOption.Developer,
    new Date("1980-03-04"),
    true,
    false,
    [2, 3, 4]
  ),
  new Employee(
    2,
    "Петров Петр Петрович",
    PositionOption.Designer,
    new Date("1991-01-07"),
    true,
    false,
    [1, 3, 4]
  ),
  new Employee(
    3,
    "Исаева Карина Антоновна",
    PositionOption.HR,
    new Date("1995-05-11"),
    false,
    false,
    [1, 2, 4]
  ),
  new Employee(
    4,
    "Львова Алина Васильевна",
    PositionOption.TeamLead,
    new Date("1975-09-07"),
    false,
    false,
    [1, 2, 3]
  ),
];
