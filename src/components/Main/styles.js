import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',

    },
    images:{
        paddingTop: '150px',
    },
    img: {
        '@media (max-width: 700px)': {
            maxWidth: '250px',
        },
    },
    imgWrap: {
        position: 'relative',
    },
    smallImg: {
        position: 'absolute',
        maxWidth: '150px',
        bottom: '0px',
        left: '155px',
        '@media (max-width: 700px)': {
            maxWidth: '100px',
            left: '75px',
        },
    },
    title: {
        ...theme.typography.antonio,
        textTransform: 'uppercase',
        marginTop: '100px',
        cursor: 'pointer'
    },
    body: {
        ...theme.typography.spartan,
        lineHeight: '1.8'
    },
    wikipedia: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '#747d8c',
        '&:hover': {
            color: 'inherit'
        }, 
    },
    btn: {
        display: 'block',
        border: '1px solid var(--link)',
        cursor: 'pointer',
        margin: '20px 0',
        padding: '20px 0',
        textTransform: 'uppercase',
        ...theme.typography.spartan,
        fontWeight: 'bold',
        fontSize: '15px',
        '&:hover': {
            backgroundColor: 'var(--hover)',
            transform: 'scale(0.98)',
            transition: 'linear 0.3s'
        }
    },
    active: {
        backgroundColor: ({color}) => color,
        '&:hover': {
            backgroundColor: ({color}) => color,
        }
    },
    number: {
        padding: '30px',
        fontSize: '15px',
        ...theme.typography.spartan,
        color: 'var(--link)',
    },
    launch: {
        marginTop: '10px',
        paddingTop: '8px',
    }
}));