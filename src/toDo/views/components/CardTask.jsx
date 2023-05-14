import { Button, Card, CardActions, IconButton, CardContent, Checkbox, Grid, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CardTask = () => {
    return (
        <Card sx={{ width: '100%' }}>
            <CardContent sx={{ padding: '0.6rem !important' }}>
                <Grid container spacing={0.5} sx={{ p: 0 }}>
                    <Grid item xs={2} sx={{ m: 'auto' }}>
                        <Checkbox
                            // checked={checked}
                            // onChange={handleChange}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" component="div">
                            lavar la loza
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            tener en cuenta hacerlo antes de las 10
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            Word of the Day
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex' }}>
                        <IconButton size="small"> <ModeEditOutlineOutlinedIcon /></IconButton>
                        <IconButton size="small"> <DeleteOutlinedIcon /></IconButton>
                    </Grid>
                </Grid>
            </CardContent>
            {/* <CardActions>
            </CardActions> */}
        </Card>
    )
}
