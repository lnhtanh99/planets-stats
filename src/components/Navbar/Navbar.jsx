import { AppBar, Toolbar, Typography, Link as MaterialLink } from '@material-ui/core';
import { useStyles } from './styles';
import { fetchData } from '../../api';
import { useEffect, useState, useContext } from 'react';
import NavbarLink from './NavbarLink';
import { Link as RouterLink } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';

function Navbar() {
    const classes = useStyles();
    const [planets, setPlanets] = useState([]);
    const { handleClick } = useContext(PlanetContext);

    useEffect(() => {
        const fetchPlanets = async () => {
            const fetchedPlanets = await fetchData();
            setPlanets(fetchedPlanets);
        }

        fetchPlanets();
    }, []);


    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            className={classes.root}
        >
            <Toolbar className={classes.wrapper}>
                <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                >
                    the planets
                </Typography>
                <Typography>
                    {
                        planets && planets.map((singlePlanet, index) => (
                            <MaterialLink
                                onClick={ () => handleClick(singlePlanet.name) }
                                underline="none"
                                color="inherit"
                                key={index}
                                component={RouterLink} to={`/planets/${singlePlanet.name}`}
                            >
                                <NavbarLink singlePlanet={singlePlanet}/>
                            </MaterialLink>
                        ))
                    }
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
