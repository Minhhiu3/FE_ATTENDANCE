import type { RouteObject } from "react-router";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import ProfileContent from "../pages/common/UserProfilePage";


export const routes: RouteObject[] = [
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/forgot-password', element: <ForgotPasswordPage/>},
    {path: '/user-in4', element:<ProfileContent/>},
    {path: '/reset-password/:token', element: <div>Reset Password (Chưa triển khai)</div>},
]

