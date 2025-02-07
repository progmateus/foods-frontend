import { memo } from "react";
import { IFoodDTO } from "../../dtos/IfoodDTO"
import { useNavigate } from "react-router";

type IProps = {
  food: IFoodDTO;
}

const FoodItemComponent = ({ food }: IProps) => {

  const navigate = useNavigate();

  const handleSelect = () => {
    navigate(`${food.id}`);
  }

  return (
    <div
      onClick={handleSelect}
      className="
      hover:cursor-pointer hover:ring-2 hover:ring-zinc-700 flex-auto w-96 rounded-lg bg-zinc-800 px-8 py-4 overflow-hidden">
      <div className="flex flex-col gap-4 text-zinc-400 uppercase">

        <div className="font-bold line-clamp-2 mb-8"> {food.name}</div>

        <div className="flex justify-between">
          <span>Código</span>
          <span className="font-bold ">{food.code}</span>
        </div>

        <div className="flex justify-between">
          <span>Nome cientifico</span>
          <span className="font-bold text-right">{food.scientificName}</span>
        </div>
        <div className="flex justify-between">
          <span>Grupo</span>
          <span className="font-bold ">{food.group?.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Marca</span>
          <span className="font-bold ">{food.brand}</span>
        </div>
      </div>
    </div>
  )
}

export const FoodItem = memo(FoodItemComponent)