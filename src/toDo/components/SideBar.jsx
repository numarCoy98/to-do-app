import { TurnedInNot, TurnedIn } from "@mui/icons-material"
import { TextField, Box, Toolbar, Typography, Divider, ListItem, ListItemButton, ListItemIcon, List, ListItemText } from "@mui/material"
// import { useState } from "react"
import { DrawerMobile, DrawerWeb } from './Drawer'


import { useDispatch, useSelector } from "react-redux"
import { filterData } from "../../store/slices/todos"


const statusString = { 'Finalizadas': 'done', 'Todas': 'all', 'Pendientes': 'pending' }


export const SideBar = ({ drawerWidth = 240 }) => {

    const { categories, filter, displayName } = useSelector((state) => ({ ...state.todo, ...state.auth }))
    const dispatch = useDispatch();

    const handleSelectStatus = (key, value) => {
        dispatch(filterData({ [key]: filter[key] === value ? undefined : value }))
    }

    const onInputSearch = ({ target: { value } }) => {
        dispatch(filterData({ 'search': value || undefined }))
    }

    const ChildrenDrawer = <>
        <Toolbar>
            <Typography variant="h5">{displayName}</Typography>
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
    </>



    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <DrawerWeb>
                {ChildrenDrawer}
            </DrawerWeb>
            <DrawerMobile>
                {ChildrenDrawer}
            </DrawerMobile>
        </Box>
    )
}
