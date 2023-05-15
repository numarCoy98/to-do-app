import { Drawer } from '@mui/material';
import { useState } from 'react'

const DrawerMobile = ({ children, drawerWidth = 240 }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (<Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant='temporary'
        sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }}
    >
        {children}
    </Drawer>)
}

const DrawerWeb = ({ children, drawerWidth = 240 }) => {
    return (
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            {children}
        </Drawer>
    )
}



export { DrawerMobile, DrawerWeb }
