import { useStyles } from './styles';
import { Link as MaterialLink, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';
import { useContext } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function DrawerLink({ singlePlanet }) {
    const { color, name } = singlePlanet;
    const classes = useStyles({ color });
    const { handleClick } = useContext(PlanetContext);

    return (
        <MaterialLink
            onClick={() => handleClick(name)}
            underline="none"
            color="inherit"
            component={RouterLink} to={`/planets/${name}`}
            className={classes.drawerLink}
        >
            <ListItemIcon className={classes.drawerIcon}>
                <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText >
                <span className={classes.drawerText}>{name}</span>
            </ListItemText>
        </MaterialLink>
    )
}

export default DrawerLink
