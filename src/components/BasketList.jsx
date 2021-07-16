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
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Стили
const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '3px',
    },
    title: {
        margin: theme.spacing(2, 2, 2)
    },
    close: {
        cursor: "pointer",
        position: "absolute",
        top: '0.5rem',
        right: '0.1rem'
    }
}));

function BasketList() {
    const classes = useStyles();
    const {
        order = [],
        handleBasketShow = Function.prototype, // Ловим ф-ии
    } = useContext(ShopContext);

    // Калькулятор общей стоимости
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

// Результат
    return (
        <Container variant='outlined' className={classes.root}>
            <List>
                <Typography variant="h6" className={classes.title}>
                    Basket
                </Typography>
                <IconButton aria-label="delete" className={classes.close} onClick={handleBasketShow}>
                    <CloseIcon/>
                </IconButton>
                <Divider/>
                {
                    order.length ? order.map(item => (
                        <BasketItem
                            key={item.id} {...item}
                        />
                    )) : <Typography align='center'>Nothing here</Typography>
                }
                <ListItem>
                    <ListItemText primary={totalPrice} secondary='Total price'/>
                    <Button variant='contained' color='primary'>Оформить</Button>
                </ListItem>
            </List>
        </Container>
    );
}

export {BasketList}