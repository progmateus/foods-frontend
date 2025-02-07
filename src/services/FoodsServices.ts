import type { IPaginationDTO } from "../dtos/IPaginationDTO";
import { api } from "./api";


export function ListFoodsService({ page, search, heroes }: IPaginationDTO) {
  return api({
    url: 'foods',
    method: 'get',
    params: {
      page,
      search,
      heroes
    }
  })
}


export function GetFoodProfileService(foodId: string) {
  return api({
    url: `foods/${foodId}`,
    method: 'get'
  })
}