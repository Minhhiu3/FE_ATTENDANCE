import type { RouteObject } from "react-router";
import AttendancePage from "../pages/student/AttendancePage";
import ClassListPage from "../pages/student/ClassListPage";



export const routes: RouteObject[] = [
    {path: '/student-attendance', element: <AttendancePage/>},
    {path: '/student-classlist', element: <ClassListPage/>}
]

