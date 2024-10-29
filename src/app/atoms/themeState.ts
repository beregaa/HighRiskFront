// src/recoil/atoms/themeAtom.ts
import { atom } from 'recoil';
import { LogoEnum } from '../enums/logoEnum.enum';



export const themeState = atom<string>({
  key: 'themeState', 
  default: LogoEnum.Gothic, 
});
