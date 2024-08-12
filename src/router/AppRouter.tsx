import { Route, Routes } from "react-router"
import { HomePage, LoginPage } from "../pages"


// aca estan las rutas principales
export const AppRouter = () => {
  return (

    <Routes>

        <Route path="/*" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

    </Routes>

  )
}
