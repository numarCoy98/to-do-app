import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components'

const drawerWidth = 240;

export const TodoLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawerWidth} />
            {/* sidebar */}
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* toolbar */}
                {children}
            </Box>
        </Box>
    )
}
