import { AppBar, Toolbar, Typography, Link as MaterialLink, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import { useStyles } from './styles';
import { fetchData } from '../../api';
import { useEffect, useState, useContext } from 'react';
import NavbarLink from './NavbarLink';
import DrawerLink from './DrawerLink';
import { Link as RouterLink } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function Navbar() {
    const [planets, setPlanets] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchPlanets = async () => {
            const fetchedPlanets = await fetchData();
            setPlanets(fetchedPlanets);
        }

        fetchPlanets();
    }, [setPlanets]);

    const classes = useStyles();
    return (
        <>
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
                        <MaterialLink
                            underline="none"
                            color="inherit"
                            component={RouterLink} to={`/`}
                        >
                            The planets
                        </MaterialLink>
                    </Typography>
                    <Typography className={classes.show}>
                        {
                            planets && planets.map((singlePlanet, index) => (
                                <MaterialLink
                                    underline="none"
                                    color="inherit"
                                    key={index}
                                    component={RouterLink} to={`/planets/${singlePlanet._id}`}
                                >
                                    <NavbarLink singlePlanet={singlePlanet} />
                                </MaterialLink>
                            ))
                        }
                    </Typography>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menu}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawer
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton
                        onClick={() => setOpen(false)}
                        className={classes.closeBtn}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Typography
                    variant="h5"
                    component="h1"
                    className={classes.drawerTitle}
                >
                    the planets
                </Typography>
                <div onClick={() => setOpen(false)} >
                    <List >
                        {
                            planets && planets.map((singlePlanet, index) => (
                                <ListItem key={index} className={classes.drawerList}>
                                    <DrawerLink singlePlanet={singlePlanet} />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Drawer>
        </>

    )
}

export default Navbar
