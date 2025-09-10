import apiClient from "./apiClient";
import { RoleEnum } from "../types/index";

interface RegisterPayload {
	role: RoleEnum;
	email: string;
	password: string;
	fullname: string;
	username: string;
	phone?: string;
}

interface LoginPayload {
	email: string;
	password: string;
}

interface UserResponse {
	_id: string;
	role: RoleEnum;
	email: string;
	fullname: string;
}

interface LoginResponse {
	accessToken: string;
	refreshToken?: string;
	user: UserResponse;
}

export const registerUser = async (payload: RegisterPayload): Promise<UserResponse> => {
	const response = await apiClient.post<UserResponse>("/auth/register", payload);
	return response.data;
};

export const loginUser = async (payload: LoginPayload): Promise<any> => {
	const response = await apiClient.post("/auth/login", payload);
	return response.data;
};

export const forgotPassword = async (payload: { email: string }) => {
	const response = await apiClient.post("/auth/forgot-password", payload);
	return response.data;
};

export const refreshToken = async (): Promise<{ accessToken: string }> => {
	const response = await apiClient.post("/auth/refresh-token");
	console.log(response);
	return response.data;
};

export const logoutUser = () => {
	localStorage.clear();
	window.location.reload();
}
