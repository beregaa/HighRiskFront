import { userRolesEnum } from "@/app/enums/userRoles.enum";

export interface UserProfileInterface {
  exp: number;
  iat: number;
  userEmail: string;
  userId: number;
  userRole: userRolesEnum;
  username: string;
}
