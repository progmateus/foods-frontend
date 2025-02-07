import { IFoodDTO } from "./IfoodDTO";

export interface IComponentDTO {
  id: string;
  name: string;
  unit: string;
  value: string;
  food: IFoodDTO;
}