import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    sky: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        zIndex: '-1'
    },
    shootingstars: {
        margin: '0',
        padding: '0',
        width: '150vh',
        height: '100vw',
        position: 'fixed',
        overflow: 'hidden',
        transform: 'translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%)) rotate(120deg)',
        zIndex: '-1'
    },
    wish: {
        height: '2px',
        top: '300px',
        width: '100px',
        margin: '0',
        opacity: '0',
        padding: ' 0',
        backgroundColor: 'white',
        position: 'absolute',
        background: 'linear-gradient(-45deg, white, rgba(0, 0, 255, 0))',
        filter: 'drop-shadow(0 0 6px white)',
        overflow: 'hidden',
        zIndex: '-1'
    }
})