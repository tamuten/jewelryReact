import { AppBar, Toolbar, Typography, Stack, IconButton } from "@mui/material";
import { FC } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

type Props = {
    handleDrawerOpen: () => void;
}

export const NavigationBar: FC<Props> = React.memo(
    function NavigationBar({ handleDrawerOpen }: Props) {
        return (
            <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
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