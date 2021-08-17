import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
        color: 'white'
    },
    content: {
        border: '1px solid var(--link)',
        backgroundColor: 'transparent',
        color: 'inherit',
        padding: '30px',
    },
    title: {
        textTransform: 'uppercase',
        ...theme.typography.spartan,
        color: 'var(--link)',
        fontWeight: 'bold',
        fontSize: '12px',
    },
    info: {
        ...theme.typography.antonio,
        fontSize: '35px',
        textTransform: 'uppercase',
    }
}));