import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '1px solid var(--border)',
        color: 'white',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        flexGrow: '1',
        textTransform: 'uppercase',
        fontSize: '35px',
        padding: '20px',
        ...theme.typography.antonio,
        textAlign: 'left',
        '@media (min-width: 1097px) and (max-width: 1283px)': {
            textAlign: 'center',
        },
    },
    menu:{
        color: 'var(--link)',
        '&:hover' :{
            color: 'white'
        },
        '@media (min-width: 1096px)': {
            display: 'none'
        }
    },
    show: {
        '@media (max-width: 1096px)': {
            display: 'none'
        }
    },
    drawer:{
        width: '100%',
    },
    drawerHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    drawerTitle: {
        textTransform: 'uppercase',
        ...theme.typography.antonio,
        color: 'var(--dark)',
        fontSize: '35px',
        textAlign: 'center',
        paddingBottom: '20px'
    },
    drawerList:{
        '&:hover': {
            backgroundColor: 'var(--hover)',
        },
        padding: '0 15px'
    },
    drawerLink: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0',
    },
    drawerText:{
        ...theme.typography.spartan,
        color: 'black',
        fontWeight: 'bold',
    },
    link: {
        ...theme.typography.spartan,
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: '15px',
        display: 'inline-block',
        margin: '0 12px',
        color: 'var(--link)',
        cursor: 'pointer',
        '&:hover': {
            color: 'inherit',
        },
        '@media (min-width: 1283px)': {
            padding: '0px 20px 35px',
            '&::before': {
                content: '""',
                display: "block",
                margin: "auto",
                marginBottom: "30px",
                height: "3px",
                width: "0px",
                background: "transparent",
                transition: "width .5s ease, background-color .5s ease"
            },
            '&:hover::before': {
                width: "100%",
                background: ({color}) => color,
            },
        },
        '@media (max-width: 1283px)': {
            padding: '35px 20px 0px',
            '&::after': {
                content: '""',
                display: "block",
                margin: "auto",
                marginTop: "30px",
                height: "3px",
                width: "0px",
                background: "transparent",
                transition: "width .5s ease, background-color .5s ease"
            },
            '&:hover::after': {
                width: "100%",
                background: ({color}) => color,
            },
        }
    }
}));