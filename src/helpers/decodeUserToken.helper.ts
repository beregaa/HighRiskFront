import { UserProfileInterface } from "@/interfaces/userProfile.interface";
import { jwtDecode } from "jwt-decode";

export const decodeUserToken: any = () => {
  const token = localStorage.getItem("user");

  if (token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken) {
      return decodedToken;
    }
  } else {
    return null;
  }
};
