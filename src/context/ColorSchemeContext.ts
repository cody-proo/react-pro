import { Dispatch, SetStateAction, createContext } from 'react';

export type ColorSchemeType = 'light' | 'dark';

interface IColorSchemeContext {
 colorScheme: ColorSchemeType;
 setColorScheme: Dispatch<SetStateAction<ColorSchemeType>>;
}

export const ColorSchemeContext = createContext<
 IColorSchemeContext | undefined
>(undefined);
