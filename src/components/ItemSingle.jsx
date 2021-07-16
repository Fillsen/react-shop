import React, {useContext} from 'react';
import {ShopContext} from "../context";
// MUI
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Стили
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        minHeight: 'calc(91.3vh - 50vh - 29.5vh)', //Рассчет длины контента карты
        flexGrow: 1
    },
    media: {
        minHeight: 350,
    }
});

function ItemSingle(props) {
    const classes = useStyles();
    const {
        id,
        name,
        description,
        price,
        full_background,
        icon,
        // addToBasket = Function.prototype #39
    } = props;

    const {addToBasket} = useContext(ShopContext)

    // Результат
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={full_background} //TODO: Нужна проверка на наличие картинки, иначе-то
                alt={name}
                id={id}
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description === 'TBD' ? `Soon` : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                            description,
                            icon
                        })}>
                    Buy
                </Button>
                <Typography size="small" color="primary" variant='subtitle2'>
                    ${price}
                </Typography>
            </CardActions>
        </Card>
    );

}

export {ItemSingle}