import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { NavBar } from '../Components/NavBar';

export default function App({ Component, pageProps }: AppProps) {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const [hasMounted, setHasMounted] = useState(false);

  let themeCheck = true;
  const isClientSide = typeof window !== 'undefined'

  if (isClientSide) {
    themeCheck = localStorage.getItem('isDarkTheme') === 'true' ? true : false
  }

  useEffect(() => {
    setIsDarkTheme(themeCheck)
  }, [themeCheck])

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const ChangeTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false)
      localStorage.setItem('isDarkTheme', 'false');
    }
    else {
      setIsDarkTheme(true)
      localStorage.setItem('isDarkTheme', 'true');
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar ChangeTheme={ChangeTheme} isDarkMode={themeCheck} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}