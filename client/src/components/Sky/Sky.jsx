import ReactAnime from 'react-animejs';
import { useStyles } from './styles';

function Sky() {
    const classes = useStyles();
    const { Anime, stagger } = ReactAnime;

    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight);

    const randomRadius = () => {
        return Math.random()*1.2 + 1.2;
    }

    const getRandomX = () => {
        return Math.floor(Math.random() * Math.floor(vw)).toString();
    }

    const getRandomY = () => {
        return Math.floor(Math.random() * Math.floor(vh)).toString();
    }

    return (
        <div>
            <Anime
                initial={[
                    {
                        targets: ".star",
                        opacity: [
                            {
                                duration: 700,
                                value: "0"
                            },
                            {
                                duration: 700,
                                value: "1"
                            }
                        ],
                        easing: "linear",
                        loop: true,
                        delay: stagger(50)
                    }
                ]}
            >
                <svg className={classes.sky}>
                    {
                        [...Array(150)].map((x, index) => (
                            <circle
                                cx={getRandomX()}
                                cy={getRandomY()}
                                r={randomRadius()}
                                stroke="none"
                                strokeWidth="0"
                                fill="#535c68"
                                key={index}
                                className="star"
                            />
                        ))
                    }
                </svg>
            </Anime>
            <Anime
                initial={[
                    {
                        targets: [".shootingstars .wish"],
                        opacity: [
                            {
                                duration: 700,
                                value: "1"
                            }
                        ],
                        width: [
                            {
                                value: "200px"
                            },
                            {
                                value: "0px"
                            }
                        ],
                        easing: "linear",
                        loop: true,
                        translateX: 350,
                        delay: stagger(1000)
                    }
                ]}>
                <div className={`${classes.shootingstars} shootingstars`}>
                    {[...Array(100)].map((x, index) => (
                        <div
                            key={index}
                            className={`${classes.wish} wish`}
                            style={{
                                left: `${getRandomY()}px`,
                                top: `${getRandomX()}px`
                            }}
                        />
                    ))}
                </div>
            </Anime>
        </div>
    )
}

export default Sky
