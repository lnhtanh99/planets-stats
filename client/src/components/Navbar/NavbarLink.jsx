import { useStyles } from './styles';

function NavbarLink({ singlePlanet }) {
    const { color } = singlePlanet;
    const classes = useStyles({color});
    return (
        <span className={classes.link}>
         { singlePlanet.name }   
        </span>
    )
}

export default NavbarLink
