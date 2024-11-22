// src/recoil/atoms/themeAtom.ts
import { atom } from 'recoil';
import { LogoEnum } from '../enums/logoEnum.enum';



export const themeNameState = atom<LogoEnum>({
  key: 'themeNameState', 
  default: LogoEnum.Edgy, 
});
