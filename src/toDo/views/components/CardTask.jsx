import { Card, IconButton, CardContent, Checkbox, Grid, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const statusToBoolean = { done: true, pending: false }

export const CardTask = ({ editItem, deleteItem, toggleItem, status, title, description, category }) => {
    return (
        <Card sx={{ width: '100%', mb: '1rem' }}>
            <CardContent sx={{ padding: '0.6rem !important' }}>
                <Grid container spacing={0.5} sx={{ p: 0 }}>
                    <Grid item xs={2} sx={{ m: 'auto' }}>
                        <Checkbox
                            checked={statusToBoolean[status]}
                            onChange={toggleItem}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                    <Grid item xs={8}>
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
                    <Grid item xs={2} sx={{ display: 'flex' }}>
                        <IconButton onClick={editItem} size="small"> <ModeEditOutlineOutlinedIcon /></IconButton>
                        <IconButton onClick={deleteItem} size="small"> <DeleteOutlinedIcon /></IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
