import { Route, Routes } from "react-router";
import Todo from "../../Components/Todo";
const AppRouter = () => {
    return(
        <Routes>
            <Route>
                <Route index element={<Todo/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouter;