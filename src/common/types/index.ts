export const RoleEnum = {
	SUPER_ADMIN: "superAdmin",
	TEACHER: "teacher",
	STUDENT: "student",
} as const;

export type RoleEnum = typeof RoleEnum[keyof typeof RoleEnum];