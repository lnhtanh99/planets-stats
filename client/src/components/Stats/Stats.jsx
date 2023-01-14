import { useStyles } from "./styles";
import { Grid, Typography, Paper } from '@material-ui/core';

function Stats({ planet }) {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={5} className={classes.root}>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography>
                            <span className={classes.title}>rotation time</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.rotation}
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography>
                            <span className={classes.title}>revolution time</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.revolution}
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography >
                            <span className={classes.title}>radius</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.radius}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography>
                            <span className={classes.title}>average temp</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.temperature}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Stats
