import { Box, AppBar, Toolbar, Stack, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ShozokuList } from './Shozoku/ShozokuList';

const drawerWidth = 240;

function App() {
    const [drawerOpen, setDrowerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrowerOpen(open => !open);
    }
    return (
        <>
            <BrowserRouter>
                <Box sx={{ display: "flex" }}>
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
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            }
                        }}
                        open={drawerOpen}
                        onClose={handleDrawerOpen}
                        variant="permanent"
                    >
                        <Toolbar />
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton href="/shozoku">
                                    <ListItemIcon>
                                        <FormatListBulletedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="所属" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton href="/register">
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1 }} >
                        <Toolbar />
                        <Box sx={{ p: 3 }}>
                            <Routes>
                                <Route path="/shozoku" element={<ShozokuList />}></Route>
                            </Routes>
                        </Box>
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
