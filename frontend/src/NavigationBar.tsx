
import { FC } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
    handleDrawerOpen: () => void;
}

export const NavigationBar: FC<Props> = React.memo(
    function NavigationBar({ handleDrawerOpen }: Props) {
        return (
            <AppBar position="fixed" sx={{ zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">Jewelry App</Typography>
                    </Stack>

                </Toolbar>

            </AppBar>
        );
    });