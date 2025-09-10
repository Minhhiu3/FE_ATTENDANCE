import { createBrowserRouter, Navigate, RouterProvider, type RouteObject } from "react-router";
import { routes as admin } from "./adminRoutes";
import { routes as auth } from "./authRoutes";
import { routes as student } from "./studentRoutes";
import { routes as teacher } from "./teacherRoutes";
import NotFoundPage from "../pages/common/NotFoundPage";
import { RoleEnum } from "../common/types";
import { commonRoutes } from "./CommonRoute";


const getRedirectPath = (user: { role: RoleEnum } | null) => {
	if (!user) return "/login";
	switch (user.role) {
		case RoleEnum.SUPER_ADMIN:
			return "/super-admin/users";
		case RoleEnum.TEACHER:
			return "/teacher/classes";
		case RoleEnum.STUDENT:
			return "/student/classes";
		default:
			return "/login";
	}
};

const user = JSON.parse(localStorage.getItem("user" ) || "null");
const routes: RouteObject[] = [
    ...commonRoutes,
	{
		path: "/",
		element: <Navigate to={getRedirectPath(user)} replace />,
	},
   
    ...admin,
    ...auth,
    ...student,
    ...teacher,
    {path: '*', element: <NotFoundPage/>},
    // {path: '/', element: <HomePage/>}
   
];

const Routes = createBrowserRouter(routes);

export const AppRoutes = () => {
    return <RouterProvider router={Routes}/>
}