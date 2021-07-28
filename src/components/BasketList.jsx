import React, {useContext} from 'react';
import {ShopContext} from "../context";

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";
import {BasketItem} from "./BasketItem";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

// Стили
const useStyles = makeStyles((theme) => ({
    list: {
        minWidth: 315,
        maxWidth: 315,
    },
    fullList: {
        width: "auto",
    },
    title: {
        margin: theme.spacing(2, 2, 2),
    },
    close: {
        cursor: "pointer",
        position: "absolute",
        top: "0.5rem",
        right: "0.1rem",
    },
    drawer: {
        maxWidth: "280px",
    },
}));

function BasketList() {
    const classes = useStyles();
    const {
        order = [],
        handleBasketShow = Function.prototype, // Ловим ф-ии
    } = useContext(ShopContext);

    // Draw


    // Калькулятор общей стоимости
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

// Результат
    // Проверка на наличие товаров и автозакрытие TODO: Известен баг с автопоявлением
    if (order.length === 0) {
        return null
    }
    return (
        <Drawer // TODO: Нужна проверка на display для адаптивности
            anchor='right'
            open={true}
            variant='persistent'
        >
            <List className={classes.list}>
                <Typography variant="h6" className={classes.title}>
                    Basket
                </Typography>
                <IconButton aria-label="delete" className={classes.close} onClick={handleBasketShow}>
                    <CloseIcon/>
                </IconButton>
                {
                    order.length ? order.map(item => (
                        <BasketItem
                            key={item.id} {...item}
                        />
                    )) : <Typography align='center'>Nothing here</Typography>
                }
                <ListItem>
                    <ListItemText primary={totalPrice} secondary='Total price'/>
                    <Button variant='contained' color='primary'>Checkout</Button>
                </ListItem>
                <Typography variant='h6' align='center' gutterBottom>
                    <IconButton aria-label="Github">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton aria-label="Telegram">
                        <TelegramIcon/>
                    </IconButton>
                    <IconButton aria-label="Mail">
                        <AlternateEmailIcon/>
                    </IconButton>
                </Typography>
            </List>
        </Drawer>
    );
}

export {BasketList}