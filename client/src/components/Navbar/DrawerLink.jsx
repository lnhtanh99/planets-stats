import { useStyles } from './styles';
import { Link as MaterialLink, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { PlanetContext } from '../../contexts/PlanetContext';
import { useContext } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const DrawerLink  = ({ singlePlanet }) => {
    const { color, name, _id } = singlePlanet;
    const classes = useStyles({ color });

    return (
        <MaterialLink
            underline="none"
            color="inherit"
            component={RouterLink} to={`/planets/${_id}`}
            className={classes.drawerLink}
        >
            <ListItemIcon>
                <FiberManualRecordIcon style={{ color: color }}/>
            </ListItemIcon>
            <ListItemText >
                <span className={classes.drawerText}>{name}</span>
            </ListItemText>
        </MaterialLink>
    )
}

export default DrawerLink
