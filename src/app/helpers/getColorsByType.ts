import { LogoEnum } from "@/app/enums/logoEnum.enum";

const colorSchemes: Record<
  LogoEnum,
  { header: string; body: string; textColor: string }
> = {
  [LogoEnum.Edgy]: {
    header: "#343A40",
    body: "#181B1D",
    textColor: "#FFFFFF",
  },
  [LogoEnum.Soft]: {
    header: "#FFC2D1",
    body: "#FFE5EC",
    textColor: "#FF527D",
  },
  [LogoEnum.Basic]: {
    header: "#E9EDC9",
    body: "#FAEDCD ",
    textColor: "#FF527D",

  },
};

export function getColorByType(type: LogoEnum) {
  return colorSchemes[type] || { header: "#000000", body: "#000000" };
}
