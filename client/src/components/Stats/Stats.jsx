import { useStyles } from "./styles";
import { Grid, Typography, Paper } from '@material-ui/core';

import { useState, useEffect } from "react";

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
                            {planet.rotation} { (planet.name === "Mercury" || planet.name === "Venus" || planet.name === "Earth" || planet.name === "Mars") ? ' Days' : ' Hours'}
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography>
                            <span className={classes.title}>revolution time</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.revolution} { (planet.name === "Mercury" || planet.name === "Venus" || planet.name === "Earth" ) ? ' Days' : ' Years'}
                        </Typography>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography >
                            <span className={classes.title}>radius</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {new Intl.NumberFormat().format(planet.radius)} KM
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="outlined" square className={classes.content}>
                        <Typography>
                            <span className={classes.title}>average temp</span> 
                        </Typography>
                        <Typography className={classes.info}>
                            {planet.temperature} °C
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Stats
