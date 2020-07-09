import { PositionOption } from "./position-option.enum";
import { positions, employees } from "../../data";

export class Employee {
  constructor(
    public id: number,
    public fullName: string = "Неизвестно",
    public position: PositionOption = PositionOption.Developer,
    public birthDate?: Date,
    public sex?: boolean,
    public isFired?: boolean,
    public colleagues?: number[]
  ) {}

  public getPositionName(): string {
    return positions.get(this.position) || "";
  }

  public getPosition(positionName: string): PositionOption {
    return [...positions.keys()][
      [...positions.values()].findIndex((value) => value === positionName)
    ];
  }

  public getColleagues(): Employee[] {
    return employees.filter(({ id }) =>
      this.colleagues?.find((colleagueId) => colleagueId === id)
    );
  }
}
