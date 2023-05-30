import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

import { useDispatch } from "react-redux"
import { startLogout } from "../../store/slices/auth/thunks"
import { drawerToggle } from "../../store/slices/ui/uiSlice"

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(drawerToggle());
    };

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (<AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }
        }}
    >
        <Toolbar>
            <IconButton
                onClick={handleDrawerToggle}
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none', } }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'> To Do App </Typography>
                <IconButton
                    color='error'
                    onClick={onLogout}
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>)
}
