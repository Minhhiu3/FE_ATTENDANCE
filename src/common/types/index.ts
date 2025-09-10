//type of: lay kieu du lieu cua bien
//type T = typeof RoleEnum;
// T = { readonly SUPER_ADMIN: "superAdmin"; }

//key of: lay gia tri key cua 1 object key value hoac type enum hoac ....

//as const giup toan bo cau truc giu lieu khong the bi thay doi 

//literal la kieu type mang gia tri cu the, 
//gia tri duoc gan vao liteal co the la string,number,... ' type hieudz = 'hieu dz vl' 

//union la nhieu literal gop lai ' type hieudz = 'cao' | 'to' | 'dz'

//interface: 
//- interface co the merger 
//- neu cac interface duoc khai bao trung ten thi se duoc merge voi nhau
//- neu trung key ma khac kieu du lieu thi se conflig
//- interface hieu{id: number}; interface hieu{id: string} ✖️  
//- interface hieu{id: number, name: string}; interface hieu{id: string} 🆗
export const RoleEnum = {
	SUPER_ADMIN: "superAdmin",
	TEACHER: "teacher",
	STUDENT: "student",
} as const
export type RoleEnum = typeof RoleEnum[keyof typeof RoleEnum];

export const StatusEnum = {
	PRESENT: "PRESENT",
	ABSENT: "ABSENT",
	LATE: "LATE",
}
export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum]

export const SchoolYearEnum = {
	K2501: "K2501",
	K2502: "K2502",
	K2503: "K2503",
	K2601: "K2601",
	K2602: "K2602",
	K2603: "K2603",
	K2701: "K2701",
	K2702: "K2702",
	K2703: "K2703",
	K2801: "K2801",
	K2802: "K2802",
	K2803: "K2803",
	K2901: "K2901",
	K2902: "K2902",
	K2903: "K2903",
	K2001: "K2001",
	K2002: "K2002",
	K2003: "K2003",
} as const;
export type SchoolYearEnum = typeof SchoolYearEnum[keyof typeof SchoolYearEnum];


export const ShiftEnum = {
	ONE: "1",
	TWO: "2",
	THREE: "3",
	FOUR: "4",
	FIVE: "5",
	SIX: "6",
} as const;
export type ShiftEnum = typeof ShiftEnum[keyof typeof ShiftEnum];

export const RoomEnum = {
	ONLINE: "Online",
	A101: "A101",
	F204: "F204",
}
export type RoomEnum = typeof RoomEnum[keyof typeof RoomEnum];

