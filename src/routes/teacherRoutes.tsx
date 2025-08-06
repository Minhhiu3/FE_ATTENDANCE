import type { RouteObject } from "react-router";
import ManagerClassPage from "../pages/teacher/manager-class/ManagerClassPage";
import ManagerSessionPage from "../pages/teacher/manager-session/ManagerSessionPage";


export const routes: RouteObject[] = [
    {path: '/manager-class', element: <ManagerClassPage/>},
    {path: '/manager-session', element: <ManagerSessionPage/>},
]

