import { useStyles } from "./styles";
import { Grid, Container, Typography, Link } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import LaunchIcon from '@material-ui/icons/Launch';
import Stats from "../Stats/Stats";

function Main() {
    const { name } = useParams();
    const { planet, setPlanet } = useContext(PlanetContext);
    const [overview, setOverview] = useState(true);
    const [internal, setInternal] = useState(false);
    const [geology, setGeology] = useState(false);

    useEffect(() => {
        const fetchPlanet = async () => {
            if(name){
                try {
                    const { data } = await axios.get(`https://planet-json.herokuapp.com/planets/?name=${name}`);
                    setPlanet(data);
    
                }
                catch (err) {
                    console.error(err);
                }
            } else {
                try {
                    const { data } = await axios.get(`https://planet-json.herokuapp.com/planets/?name=Earth`);
                    setPlanet(data);
    
                }
                catch (err) {
                    console.error(err);
                }
            }

        }
        fetchPlanet();
    }, [name, setPlanet]);

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

    const colorArray = planet.map(el => el.color);
    const color = colorArray[0];

    const classes = useStyles({ color });
    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item md={8} lg={8} className={classes.images}>
                    {overview && <img src={planet.map(el => el.images.planet)} className={classes.img} alt="planet" />}
                    {internal && <img src={planet.map(el => el.images.internal)} className={classes.img} alt="planet" />}
                    {geology &&
                        <div className={classes.imgWrap}>
                            <img src={planet.map(el => el.images.geology)}
                                className={classes.smallImg}
                                alt="planet" />
                            <img src={planet.map(el => el.images.planet)}
                                className={classes.img}
                                alt="planet" />
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
                        {planet.map(el => el.name)}
                    </Typography>
                    <Typography
                        className={classes.body}
                    >
                        {overview && planet.map(el => el.overview.content)}
                        {internal && planet.map(el => el.structure.content)}
                        {geology && planet.map(el => el.geology.content)}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        {overview && <Link
                            href={planet.map(el => el.overview.source)}
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
                            href={planet.map(el => el.structure.source)}
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
                            href={planet.map(el => el.geology.source)}
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
    )
}

export default Main
