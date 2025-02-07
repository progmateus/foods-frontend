import { BrowserRouter, Route, Routes } from "react-router"
import { FoodsList } from "../pages/foods/FoodsList"
import { FoodProfile } from "../pages/foods/[id]/FoodProfile"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<FoodsList />} />
          <Route path="/:id" element={<FoodProfile />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}