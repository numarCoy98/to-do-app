import { TurnedInNot, TurnedIn } from "@mui/icons-material"
import { TextField, Drawer, Box, Toolbar, Typography, Divider, ListItem, ListItemButton, ListItemIcon, List, ListItemText } from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import { filterData } from "../../store/slices/todos"


const statusString = { 'Finalizadas': 'done', 'Todas': 'all', 'Pendientes': 'pending' }

export const SideBar = ({ drawerWidth = 240 }) => {

    const { categories, filter } = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handleSelectStatus = (key, value) => {
        dispatch(filterData({ [key]: filter[key] === value ? undefined : value }))
    }

    const onInputSearch = ({ target: { value } }) => {
        dispatch(filterData({ 'search': value || undefined }))
    }

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h5">Numar Coy</Typography>
                </Toolbar>
                <Divider />
                <TextField
                    onInput={onInputSearch}
                    sx={{ m: '1rem' }}
                    id="outlined-required"
                    label="Buscar tarea"
                    defaultValue={filter?.search}
                />
                <Divider />
                <List>
                    {
                        ['Todas', 'Pendientes', 'Finalizadas'].map(text => (
                            <ListItem onClick={() => handleSelectStatus('status', statusString[text])} key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {statusString[text] === filter?.status ? <TurnedIn /> : <TurnedInNot />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        categories.map(text => (
                            <ListItem onClick={() => handleSelectStatus('category', text)} key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {filter.category === text ? <TurnedIn /> : <TurnedInNot />}
                                    </ListItemIcon>
                                    <ListItemText primary={text.toUpperCase()} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
