import { Card, IconButton, CardContent, Checkbox, Grid, Typography, CardActions, Button } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const statusToBoolean = { done: true, pending: false }

export const CardTask = ({ editItem, deleteItem, toggleItem, status, title, description, category }) => {
    return (
        <>
            <Card sx={{ width: '100%', mb: '1rem', display: { xs: 'none', sm: 'block' }, }}>
                <CardContent sx={{ padding: '0.6rem !important' }}>
                    <Grid container spacing={0} sx={{ p: 0 }}>
                        <Grid item xs={2} sx={{ m: 'auto' }}>
                            <Checkbox
                                checked={statusToBoolean[status]}
                                onChange={toggleItem}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {description}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                {category}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <IconButton onClick={editItem} size="small"> <ModeEditOutlineOutlinedIcon /></IconButton>
                            <IconButton onClick={deleteItem} size="small"> <DeleteOutlinedIcon /></IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ width: '100%', mb: '1rem', display: { xs: 'block', sm: 'none' } }}>
                <CardContent sx={{ padding: '0.6rem !important' }}>
                    <Grid container spacing={0.5} sx={{ p: 0 }}>
                    </Grid>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Checkbox
                        checked={statusToBoolean[status]}
                        onChange={toggleItem}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Grid>
                        <Button onClick={editItem} size="small">Editar</Button>
                        <Button onClick={deleteItem} size="small">Eliminar</Button>

                    </Grid>
                </CardActions>
            </Card>
        </>
    )
}
