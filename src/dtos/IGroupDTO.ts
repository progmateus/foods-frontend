import { IFoodDTO } from "./IfoodDTO";

export interface IGroupDTO {
  id: string;
  code: string;
  name: string;
  scientificName: string;
  group: string;
  brand: string;
  foods: IFoodDTO[];
}