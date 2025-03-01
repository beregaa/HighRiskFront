import axios from "axios";
import Cookies from "js-cookie";

export const loginUser = async (values: any, setUser: (user: any) => void) => {
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
