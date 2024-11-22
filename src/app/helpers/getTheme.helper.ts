import { LogoEnum } from "@/app/enums/logoEnum.enum";

const themeSchemes: Record<
  LogoEnum,
  { headerBg: string; body: string; textColor: string; authlogo: string }
> = {
  [LogoEnum.Edgy]: {
    headerBg: "#343A40",
    body: "#181B1D",
    textColor: "#FFFFFF",
    authlogo: "", 
  },
  [LogoEnum.Soft]: {
    headerBg: "#FFC2D1",
    body: "#FFE5EC",
    textColor: "#FF527D",
    authlogo: "/soft.png", 
  },
  [LogoEnum.Basic]: {
    headerBg: "#dbe0ae",
    body: "#FAEDCD ",
    textColor: "#FF527D",
    authlogo: "/basic.png", 
  },
};

export function getTheme(type: LogoEnum) {
  return themeSchemes[type] || { headerBg: "#000000", body: "#000000", authlogo: "default.png" };
}
