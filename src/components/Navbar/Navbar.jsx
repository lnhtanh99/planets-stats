import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { fetchData } from '../../api';
import { useEffect, useState } from 'react';
import NavbarLink from './NavbarLink';

function Navbar() {
    const classes = useStyles();
    const [planets, setPlanets] = useState([]);

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
                        planets && planets.map((planet, index) => (
                            <Link
                                href="#"
                                underline="none"
                                color="inherit"
                                key={index}
                            >
                                <NavbarLink planet={planet}/>
                            </Link>
                        ))
                    }

                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
