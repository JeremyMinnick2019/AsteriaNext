import { MaterialUISwitch } from '../styles/MaterialUISwitch';

type ThemeSwitchProps = {
    ChangeTheme: () => void,
    isDarkMode: boolean
}

export const ThemeSwitch = ({ ChangeTheme, isDarkMode }: ThemeSwitchProps) =>
    <MaterialUISwitch sx={{ m: 1 }} checked={isDarkMode} onChange={ChangeTheme} />
