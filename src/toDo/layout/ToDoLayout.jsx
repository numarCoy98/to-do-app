import { Box } from '@mui/system'
import React from 'react'

// const drawerWidth = 240;

export const TodoLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
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
