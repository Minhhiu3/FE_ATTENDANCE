import type { RouteObject } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import RegisterPage from "../pages/auth/RegisterPage";


export const routes: RouteObject[] = [
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/forgot-password', element: <ForgotPasswordPage/>},
    {path: '/reset-password/:token', element: <div>Reset Password (Chưa triển khai)</div>},
]

