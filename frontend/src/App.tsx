
import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ShozokuList } from './Shozoku/ShozokuList';
import { TantoshaList } from './Tantosha/TantoshaList';
import { ShozokuRegister } from './Shozoku/ShozokuRegister';
import { NavigationBar } from './NavigationBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

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
                            <Link to="/shozoku" style={{ textDecoration: "none", color: "inherit" }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FormatListBulletedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="所属" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="/tantosha" style={{ textDecoration: "none", color: "inherit" }}>
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
                    <Box component="main" sx={{ flexGrow: 1, backgroundColor: "#E7EBF0", display: "flex", flexDirection: "column" }} >
                        <Toolbar />
                        <Box sx={{ px: 3, py: 1, boxSizing: "border-box", flexGrow: 1, display: "flex", flexDirection: "column" }}>

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
