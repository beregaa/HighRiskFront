import { useUserStore } from "@/stores/userStore";
import axios from "axios";
import Cookies from "js-cookie";

export const loginUser = async (values: any) => {
  const setUser = useUserStore((state) => state.setUser);

  try {
    const response = await axios.post(
      "https://highriskback.onrender.com/auth/login",
      values
    );

    Cookies.set("user", JSON.stringify(response.data), {
      expires: 7,
      sameSite: "Lax",
    });
    setUser(response.data);
    window.location.href = "/";
  } catch (error) {
    console.error("API Error:", error);
  }
};
