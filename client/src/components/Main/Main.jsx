import { useStyles } from "./styles";
import { Grid, Container, Typography, Link } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';
import { useContext, useEffect, useState } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import Stats from "../Stats/Stats";

import { fetchSinglePlanet } from '../../api';

function Main() {
    const { id } = useParams();
    const { planet, setPlanet } = useContext(PlanetContext);
    const [overview, setOverview] = useState(true);
    const [internal, setInternal] = useState(false);
    const [geology, setGeology] = useState(false);
    const [color, setColor] = useState('');

    useEffect(() => {
        const fetchPlanet = async () => {
            if (id) {
                try {
                    const data = await fetchSinglePlanet(id);
                    setPlanet(data);
                    setColor(data.color);
                }
                catch (err) {
                    console.error(err);
                }
            } else {
                try {
                    const data = await fetchSinglePlanet('63c2d322d40de5b4bd70d1f9');
                    setPlanet(data);
                    setColor(data.color);
                }
                catch (err) {
                    console.error(err);
                }
            }

        }
        fetchPlanet();
    }, [id, setPlanet]);

    const handleClick = (type) => {
        if (type === 'overview') {
            setOverview(true);
            setInternal(false);
            setGeology(false);
        } else if (type === 'internal') {
            setOverview(false);
            setInternal(true);
            setGeology(false);
        } else {
            setOverview(false);
            setInternal(false);
            setGeology(true);
        }
    }


    const classes = useStyles({ color });
    return (
        <>
            {planet &&
                <Container className={classes.root}>
                    <Grid container justifyContent="center">
                        <Grid item md={8} lg={8} className={classes.images}>
                            {overview && <img src={planet.images.planet} className={classes.img} alt="planet" />}
                            {internal && <img src={planet.images.internal} className={classes.img} alt="internal" />}
                            {geology &&
                                <div className={classes.imgWrap}>
                                    <img src={planet.images.geology}
                                        className={classes.smallImg}
                                        alt="geology" />
                                    <img src={planet.images.planet}
                                        className={classes.img}
                                        alt="geology" />
                                </div>
                            }
                        </Grid>
                        <Grid item md={4} lg={4} className={classes.content}>
                            <Typography
                                variant="h1"
                                component="h2"
                                className={classes.title}
                                gutterBottom
                            >
                                {planet.name}
                            </Typography>
                            <Typography
                                className={classes.body}
                            >
                                {overview && planet.overview.content}
                                {internal && planet.structure.content}
                                {geology && planet.geology.content}
                            </Typography>
                            <Typography
                                variant="h6"
                            >
                                {overview && <Link
                                    href={planet.overview.source}
                                    underline="none"
                                    color='inherit'
                                >
                                    Source :
                                    <span className={classes.wikipedia}>
                                        Wikipedia
                                        <LaunchIcon className={classes.launch} />
                                    </span>
                                </Link>
                                }
                                {internal && <Link
                                    href={planet.structure.source}
                                    underline="none"
                                    color='inherit'
                                >
                                    Source :
                                    <span className={classes.wikipedia}>
                                        Wikipedia
                                        <LaunchIcon className={classes.launch} />
                                    </span>
                                </Link>
                                }
                                {geology && <Link
                                    href={planet.geology.source}
                                    underline="none"
                                    color='inherit'
                                >
                                    Source :
                                    <span className={classes.wikipedia}>
                                        Wikipedia
                                        <LaunchIcon className={classes.launch} />
                                    </span>
                                </Link>
                                }
                            </Typography>
                            <Typography variant="h6">
                                <Link
                                    onClick={() => handleClick('overview')}
                                    underline="none"
                                    color='inherit'
                                    className={overview ? `${classes.btn} ${classes.active}` : classes.btn}
                                >
                                    <span className={classes.number}>
                                        01
                                    </span>overview
                                </Link>
                                <Link
                                    onClick={() => handleClick('internal')}
                                    underline="none"
                                    color='inherit'
                                    className={internal ? `${classes.btn} ${classes.active}` : classes.btn}
                                >
                                    <span className={classes.number}>
                                        02
                                    </span>internal structure
                                </Link>
                                <Link
                                    onClick={() => handleClick('geology')}
                                    underline="none"
                                    color='inherit'
                                    className={geology ? `${classes.btn} ${classes.active}` : classes.btn}
                                >
                                    <span className={classes.number}>
                                        03
                                    </span>surface geology
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Stats planet={planet} />
                </Container>
            }
        </>
    )
}

export default Main
