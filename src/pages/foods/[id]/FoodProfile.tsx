import { useParams } from "react-router";
import { GetFoodProfileService } from "../../../services/FoodsServices";
import { Header } from "../../../components/Header/Index";
import { useQuery } from "@tanstack/react-query";
import { IFoodDTO } from "../../../dtos/IfoodDTO";

const FoodProfile = () => {

  const { id } = useParams();


  const loadFoodProfile = async (): Promise<IFoodDTO> => {

    return GetFoodProfileService(String(id)).then(({ data }) => {
      return data.data
    }).catch((err) => {
      console.log(err)
    })
  }


  const { data: food } = useQuery<IFoodDTO>({
    queryKey: ['get-food-profile', String(id)],
    queryFn: loadFoodProfile,
  })


  return (
    <div className="flex flex-col gap-20 min-h-screen w-full bg-zinc-900 rounded-xl p-8">
      <Header />
      {
        !food ? (
          <div> Nenhum resultado encontrado</div>
        ) : (
          <div className="flex items-center  justify-center min-h-screen w-full">
            <div className="flex flex-col bg-zinc-800 gap-20 h-full w-[100%] lg:w-[60%] rounded-xl p-8">
              <div>
                <div className="mb-8 text-zinc-500 text-2xl"> Informações </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                  <div>
                    <div className="text-zinc-200 font-bold">NOME</div>
                    <div className="text-zinc-400">{food.name}</div>
                  </div>

                  <div>
                    <div className="text-zinc-200 font-bold">NOME CIENTIFICO</div>
                    <div className="text-zinc-400">{food.scientificName}</div>
                  </div>

                  <div>
                    <div className="text-zinc-200 font-bold">GRUPO</div>
                    <div className="text-zinc-400">{food.group?.name ?? 'Não informado'}</div>
                  </div>

                  <div>
                    <div className="text-zinc-200 font-bold">MARCA</div>
                    <div className="text-zinc-400">{food.brand ?? 'Não informado'}</div>
                  </div>

                </div>
              </div>
              <div>
                <div className="mb-8 text-zinc-500 text-2xl"> Componentes </div>
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-10">

                  {
                    food.components && food.components.length && (
                      food.components.map((component) => {
                        return (
                          <div key={component.id}>
                            <div className="text-zinc-200 font-bold">{component.name}</div>
                            <span className="text-zinc-400">{component.value}</span>
                            <span className="text-zinc-400">{component.unit}</span>
                          </div>
                        )
                      })
                    )
                  }
                </div>
              </div>
            </div>
          </div >
        )
      }
    </div >
  )
}


export { FoodProfile }