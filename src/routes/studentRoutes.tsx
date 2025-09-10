import type { RouteObject } from "react-router";
import AttendancePage from "../pages/student/AttendancePage";
import ClassListPage from "../pages/student/ClassListPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { RoleEnum } from "../common/types";
import StudentLayout from "../components/layouts/StudentLayout";
import HomePage from "../pages/student/HomePage";
import ClassSchedulePage from "../pages/student/ClassSchedulePage";



export const routes: RouteObject[] = [
    // Định nghĩa các route cho student
    {
        path: "/student",
        element: (
            //chua song
            <ProtectedRoute allowedRoles = {[RoleEnum.STUDENT]}>
            <StudentLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "classes",
                element: <ClassListPage />,
            },
            {
                path: "attendances",
                element: <AttendancePage />,
            },
            {
                path: "home",
                element: <HomePage/>,
            },
            {
                path: "class-schedule",
                element: <ClassSchedulePage/>,
            }
        ],
    },
];
