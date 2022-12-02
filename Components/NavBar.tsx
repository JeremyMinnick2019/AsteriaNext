import { AppBar, Box, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Fragment } from "react";
import { ThemeSwitch } from "./ThemeSwitch";

type NavBarProps = {
    ChangeTheme: () => void,
    isDarkMode: boolean
}

export const NavBar = ({ ChangeTheme, isDarkMode }: NavBarProps) =>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                    <List sx={{ display: 'flex', flexDirection: 'row', padding: '0' }}>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/Home/HomePage" sx={{ textAlign: 'center' }}>
                                <ListItemText primary={
                                <Fragment>
                                    <Typography fontSize={'1.4rem'}>
                                        Asteria
                                    </Typography>
                                </Fragment>} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/Mars/MarsGrid" sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Mars'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <ThemeSwitch ChangeTheme={ChangeTheme} isDarkMode={isDarkMode} />
                </Box>
            </Toolbar>
        </AppBar>
    </Box>;