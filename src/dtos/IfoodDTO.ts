import { IComponentDTO } from "./IComponentDTO";
import { IGroupDTO } from "./IGroupDTO";

export interface IFoodDTO {
  id: string;
  code: string;
  name: string;
  scientificName: string;
  group: IGroupDTO;
  components: IComponentDTO[];
  brand: string;
  groupId?: string;
}