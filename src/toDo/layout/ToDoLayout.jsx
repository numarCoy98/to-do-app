import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components'

const drawerWidth = 240;

export const TodoLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawerWidth} />
            <SideBar drawerWidth={drawerWidth}></SideBar>
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
