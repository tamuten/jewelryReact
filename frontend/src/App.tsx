import { Box, Toolbar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ShozokuList } from './Shozoku/ShozokuList';
import { TantoshaList } from './Tantosha/TantoshaList';
import { ShozokuRegister } from './Shozoku/ShozokuRegister';
import { NavigationBar } from './NavigationBar';

const drawerWidth = 240;

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = useCallback((): void => {
        setDrawerOpen(open => !open);
    }, []);

    return (
        <>

            <Box sx={{ display: "flex", flexGrow: 1 }}>
                <NavigationBar handleDrawerOpen={handleDrawerOpen} />
                <BrowserRouter>
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
                        <List dense>
                            <Link to="/shozoku" style={{ textDecoration: "none" }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="所属" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="/tantosha" style={{ textDecoration: "none" }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AddIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="担当者" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#E7EBF0", height: "100%" }} >
                        <Toolbar />
                        <Box sx={{ px: 3, py: 1, boxSizing: "border-box", height: "calc(100% - 64px)" }}>

                            <Routes>
                                <Route path="/shozoku" element={<ShozokuList />}></Route>
                                <Route path="/shozoku/add" element={<ShozokuRegister />}></Route>
                                <Route path="/tantosha" element={<TantoshaList />}></Route>
                            </Routes>

                        </Box>
                    </Box>
                </BrowserRouter>
            </Box>

        </>
    );
}

export default App;
