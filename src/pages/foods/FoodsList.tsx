import { useSearchParams } from "react-router";
import { Header } from "../../components/Header/Index"
import { IFoodDTO } from "../../dtos/IfoodDTO"
import { ListFoodsService } from "../../services/FoodsServices"
import { FoodItem } from "../../components/Foods/FoodItem";
import { FoodSkeletonItem } from "../../components/Foods/FoodSkeletionItem";
import { Plus } from "@phosphor-icons/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Spinner } from "../../components/Spinner/Index";

const FoodsList = () => {

  const [params] = useSearchParams();

  const [name,] = useState(params.get("name") ?? "")

  const loadFoods = async (page: number): Promise<IFoodDTO[]> => {
    return ListFoodsService({ page, search: params.get("name") ?? "" }).then(({ data }) => {
      return data.data
    }).catch((err) => {
      console.log(err)
    })
  }

  const { data: results, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<IFoodDTO[]>({
    queryKey: ['get-foods', name],
    queryFn: ({ pageParam }) => loadFoods(Number(pageParam)),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      console.log(allPages)
      if (lastPage.length === 0) {
        return undefined
      }
      return Number(lastPageParam) + 1
    }
  })

  const onLoadMore = () => {
    if (isLoading || !hasNextPage) return
    fetchNextPage()
  }

  useEffect(() => {
    refetch()
  }, [params, refetch])



  return (
    <div className="flex flex-col gap-20 min-h-screen w-full bg-zinc-900 rounded-xl p-8">
      <Header />
      <div className="flex flex-wrap gap-6">
        {
          isLoading && (
            <>
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
              <FoodSkeletonItem />
            </>
          )
        }

        {
          !isLoading && results?.pages.map(page => page).flat() && results?.pages.map(page => page).flat().length > 0 && (
            results?.pages.map(page => page).flat().map((food: IFoodDTO) => {
              return (
                <FoodItem key={food.id} food={food} />
              )
            })
          )
        }

        {
          hasNextPage && !isFetchingNextPage && (
            <div className="flex w-full items-center justify-center">
              <button onClick={onLoadMore}
                className="hover:scale-105 rounded-full border-spacing-1 border-zinc-700 border-2 p-1">
                <Plus size="32" className="text-zinc-500" />
              </button>
            </div>
          )
        }

        {
          isFetchingNextPage && (
            <div className="flex w-full items-center justify-center">
              <Spinner />
            </div>
          )
        }
      </div>

    </div>
  )
}

export { FoodsList }