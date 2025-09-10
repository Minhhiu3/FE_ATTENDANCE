import type { RouteObject } from "react-router";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import ManagerUserPage from "../pages/admin/manager-user/ManagerUserPage";
import ManagerClassesPage from "../pages/admin/manager-subject/ManagerClassesPage";
import ManagerSubjectPage from "../pages/admin/manager-subject/ManagerSubjectPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { RoleEnum } from "../common/types";
import AdminLayouts from "../components/layouts/AdminLayouts";
import MajorManager from "../pages/admin/manager-major/Major_Manager";

export const routes: RouteObject[] = [
    {
        path: '/admin', 
        element: (
			<ProtectedRoute allowedRoles={[RoleEnum.SUPER_ADMIN]}>
				<AdminLayouts />
			</ProtectedRoute>
		),
        children: [
    {path: 'dashboard', element: <DashboardAdmin/>},
    {path: 'users', element: <ManagerUserPage/>},
    {path: 'classes', element: <ManagerClassesPage/>},
    {path: 'majors', element: <MajorManager/>},
    {path: 'subjects', element: <ManagerSubjectPage/>},
        ]
    }


    
]
export default routes;

