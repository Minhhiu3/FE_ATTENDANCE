import type { IResponse, Params } from "../types/api";
import apiClient from "./apiClient";
import type { Major } from "../types/Major";

/**
 * Lấy danh sách Majors (có phân trang, search, sort)
 */
export const getAllMajors = async (
  params?: Params
): Promise<IResponse<Major[]>> => {
  const res = await apiClient.get("/major", { params });
  console.log('chuc mung bo hieu da getAllMajor thanh cong:',res);
  return res.data.data; // data: Major[], meta, success, message
};

/**
 * Lấy chi tiết 1 Major theo id
 */
export const getMajorById = async (id: string): Promise<IResponse<Major>> => {
  const res = await apiClient.get(`/major/${id}`);
  console.log('chuc mung bo hieu da getMajorById thanh cong:',res);

  return res.data;
};

/**
 * Tạo mới Major
 */
export const createMajor = async (
  payload: Omit<Major, "_id" | "deletedAt" | "createdAt" | "updatedAt">
): Promise<IResponse<Major>> => {
  const res = await apiClient.post("/major", payload);
  console.log('chuc mung bo hieu da addMajor thanh cong:',res);
  return res.data;
};

/**
 * Cập nhật Major
 */
export const updateMajor = async (
  id: string,
  payload: Partial<Omit<Major, "_id" | "deletedAt" | "createdAt" | "updatedAt">>
): Promise<IResponse<Major>> => {
  const res = await apiClient.patch(`/major/${id}`, payload);
  console.log('chuc mung bo hieu da updateMajor thanh cong:',res);
  return res.data;
};

/**
 * Xóa mềm Major
 */
export const softDeleteMajor = async (
  id: string
): Promise<IResponse<Major>> => {
  const res = await apiClient.patch(`/major/soft-delete/${id}`);
  console.log('chuc mung bo hieu da softDeleteMajor thanh cong:',res);
  return res.data;
};

/**
 * Khôi phục Major đã xóa mềm
 */
export const restoreMajor = async (id: string): Promise<IResponse<Major>> => {
  const res = await apiClient.patch(`/major/restore/${id}`);
  console.log('chuc mung bo hieu da restoreMajor thanh cong:',res);
  return res.data;
};

/**
 * Xóa cứng Major
 */
export const deleteMajor = async (id: string): Promise<IResponse<Major>> => {
  const res = await apiClient.delete(`/major/${id}`);
  console.log('chuc mung bo hieu da hardDeleteMajor thanh cong:',res);
  return res.data;
};
