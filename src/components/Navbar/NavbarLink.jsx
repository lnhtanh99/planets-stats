import { useStyles } from './styles';
import { useState, useEffect } from 'react';

function NavbarLink({ planet }) {
    const [borderColor, setBorderColor] = useState('');
    const { color } = planet;
    
    useEffect(() => {
        setBorderColor(`${color}`);
    }, [])

    console.log(borderColor)
    const classes = useStyles({borderColor});
    return (
        <span className={classes.link}>
         { planet.name }   
        </span>
    )
}

export default NavbarLink
